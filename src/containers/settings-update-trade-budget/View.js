import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { DEAL } from '../../constants/fields';
import { TextField } from '../../components/fields';
import { Text, Loader, AlertSection } from '../../components';
import { ButtonPrimary } from '../../components/buttons';
import { FormTitle } from '../../components/titles/FormTitle';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { FieldGrid } from '../../components/grids/FieldGrid';

export const SettingsUpdateTradeBudgetView = ({
  disabled,
  updating,
  loading,
  error,
  errorMessage,
  success,
}) => {
  return (
    <React.Fragment>
      {(loading || updating) && <Loader />}
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="SETTINGS.UPDATE_TRADE_BUDGET.TITLE" offset={4} />
          <FieldGrid double>
            <Field
              name={DEAL.TRADE_BUDGET}
              loading={loading}
              component={TextField}
              type="number"
              label={<Text tid="SETTINGS.UPDATE_TRADE_BUDGET.FORM.TRADE_BUDGET" />}
            />
          </FieldGrid>
          <ButtonPrimary size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
            <Text tid="SETTINGS.UPDATE_TRADE_BUDGET.FORM.BUTTON_SUBMIT" />
          </ButtonPrimary>
        </IndentLayout>
      </Box>
      <AlertSection
        successMessage="SETTINGS.UPDATE_TRADE_BUDGET.FORM.ALERT_SUCCESS"
        error={error}
        success={success}
        errorMessage={errorMessage}
      />
    </React.Fragment>
  );
};

SettingsUpdateTradeBudgetView.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  updating: PropTypes.bool,
  errorMessage: PropTypes.string,
  success: PropTypes.bool,
};
