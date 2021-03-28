import { SETTINGS_UPDATE_TRADE_BUDGET } from '../actions';
import {
  initRequestWithDataState,
  setRequestError,
  setUpdatePending,
  resetRequestStatus,
  setUpdateSuccess,
} from '../utils/store';

export const initialState = {
  data: initRequestWithDataState(),
};

export const settingsUpdateTradeBudget = (state = initialState, action) => {
  switch (action.type) {
    case SETTINGS_UPDATE_TRADE_BUDGET.EDIT_PENDING:
      return {
        ...state,
        data: setUpdatePending(state.data),
      };
    case SETTINGS_UPDATE_TRADE_BUDGET.EDIT_SUCCESS:
      return {
        ...state,
        data: setUpdateSuccess(state.data, action.data),
      };
    case SETTINGS_UPDATE_TRADE_BUDGET.EDIT_FAIL:
      return {
        ...state,
        data: setRequestError(state.data, action.message),
      };
    case SETTINGS_UPDATE_TRADE_BUDGET.RESET_STATUS: {
      return {
        ...state,
        data: resetRequestStatus(state.data),
      };
    }
    default:
      return state;
  }
};
