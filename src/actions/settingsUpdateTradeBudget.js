import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { SETTINGS_UPDATE_TRADE_BUDGET } from './index';
import { convertUpdateTradeBudgetData } from '../api/settings';

const setFail = (message) => ({
  type: SETTINGS_UPDATE_TRADE_BUDGET.EDIT_FAIL,
  message,
});

const setUpdating = () => ({
  type: SETTINGS_UPDATE_TRADE_BUDGET.EDIT_PENDING,
});

const setUpdated = (data) => ({
  type: SETTINGS_UPDATE_TRADE_BUDGET.EDIT_SUCCESS,
  data,
});

export const resetStatus = () => ({
  type: SETTINGS_UPDATE_TRADE_BUDGET.RESET_STATUS,
});

export const updateTradeBudget = (payloadData) => {
  const payload = convertUpdateTradeBudgetData(payloadData);

  return async (dispatch) => {
    dispatch(setUpdating());

    try {
      await httpRequest.patch(API.SETTINGS_UPDATE_TRADE_BUDGET(), payload);
      dispatch(setUpdated());
    } catch ({ response: { data = {} } = { response: { data: {} } } }) {
      dispatch(setFail(data.message));
    }
  };
};
