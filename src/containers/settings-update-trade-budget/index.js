import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import { validate } from '../../validations/settingsUpdateTradeBudget';
import { FORM_NAMES } from '../../constants';
import { DEAL } from '../../constants/fields';
import { updateTradeBudget, resetStatus } from '../../actions/settingsUpdateTradeBudget';
import { updateSettingsInfo } from '../../actions/settingsInfo';
import {
  getData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
  getErrorMessage,
  isUpdatePending,
  isUpdateSuccess,
} from '../../utils/store';

import { SettingsUpdateTradeBudgetView } from './View';

const SettingsUpdateTradeBudgetContainer = ({ handleSubmit, initialize, ...props }) => {
  const dispatch = useDispatch();
  const {
    isDataError,
    isDataLoading,
    isDataLoaded,
    isDataUpdating,
    isDataUpdated,
    errorMessage,
    data: storeData,
    isUpdating,
    isUpdated,
    pageLoading,
  } = useSelector(({ settingsUpdateTradeBudget, settingsInfo, navigation }) => ({
    data: getData(settingsInfo.data),
    isDataError: isRequestError(settingsInfo.data),
    isDataLoading: isRequestPending(settingsInfo.data),
    isDataUpdating: isUpdatePending(settingsInfo.data),
    isDataUpdated: isUpdateSuccess(settingsInfo.data),
    isDataLoaded: isRequestSuccess(settingsInfo.data),
    errorMessage: getErrorMessage(settingsUpdateTradeBudget.data),
    isUpdating: isUpdatePending(settingsUpdateTradeBudget.data),
    isUpdated: isUpdateSuccess(settingsUpdateTradeBudget.data),
    pageLoading: navigation.pageLoading,
  }));

  useEffect(() => {
    return () => {
      dispatch(resetStatus());
    };
  }, []);

  useEffect(() => {
    if (isDataLoaded) {
      initialize({ [DEAL.TRADE_BUDGET]: storeData.tradeBudget });
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if (isDataUpdated) {
      initialize({ [DEAL.TRADE_BUDGET]: storeData.tradeBudget });
    }
  }, [isDataUpdated]);

  const isFormDisabled = () => {
    const { valid, pristine, submitting } = props;

    return !valid || pristine || submitting || isDataLoading || isDataUpdating || isUpdating || pageLoading;
  };

  const submitUpdate = async (form) => {
    await dispatch(
      updateTradeBudget({
        tradeBudget: form[DEAL.TRADE_BUDGET],
      }),
    );

    dispatch(updateSettingsInfo());
  };

  const isLoading = () => (pageLoading && !isDataLoaded) || isDataLoading || isUpdating;

  return (
    <form onSubmit={handleSubmit((form) => submitUpdate(form))}>
      <SettingsUpdateTradeBudgetView
        disabled={isFormDisabled()}
        success={isUpdated}
        error={isDataError}
        updating={isUpdating || isDataUpdating}
        loading={isLoading()}
        errorMessage={errorMessage}
      />
    </form>
  );
};

const ReduxForm = reduxForm({
  form: FORM_NAMES.SETTINGS_UPDATE_TRADE_BUDGET,
  validate,
});

SettingsUpdateTradeBudgetContainer.propTypes = {
  handleSubmit: PropTypes.func,
  initialize: PropTypes.func,
  errorMessage: PropTypes.string,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export const SettingsUpdateTradeBudget = ReduxForm(SettingsUpdateTradeBudgetContainer);
