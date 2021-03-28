import { DEAL_LIST } from '../actions';
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

export const dealList = (state = initialState, action) => {
  switch (action.type) {
    case DEAL_LIST.LOAD_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };
    case DEAL_LIST.LOAD_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };
    case DEAL_LIST.LOAD_FAIL:
      return {
        ...state,
        data: setRequestError(state.data, action.message),
      };
    case DEAL_LIST.UPDATE_PENDING:
      return {
        ...state,
        data: setUpdatePending(state.data),
      };
    case DEAL_LIST.UPDATE_SUCCESS:
      return {
        ...state,
        data: setUpdateSuccess(state.data, action.data),
      };
    default:
      return state;
  }
};
