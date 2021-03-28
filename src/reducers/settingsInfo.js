import { SETTINGS_INFO } from '../actions';
import {
  initRequestWithDataState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
  setUpdateSuccess,
  setUpdatePending,
} from '../utils/store';

const initialState = {
  data: initRequestWithDataState(),
};

export const settingsInfo = (state = initialState, action) => {
  switch (action.type) {
    case SETTINGS_INFO.LOAD_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };
    case SETTINGS_INFO.LOAD_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };
    case SETTINGS_INFO.LOAD_FAIL:
      return {
        ...state,
        data: setRequestError(state.data, action.message),
      };
    case SETTINGS_INFO.UPDATE_PENDING:
      return {
        ...state,
        data: setUpdatePending(state.data),
      };
    case SETTINGS_INFO.UPDATE_SUCCESS:
      return {
        ...state,
        data: setUpdateSuccess(state.data, action.data),
      };
    default:
      return state;
  }
};
