import { COURSE_TOKEN_INFO } from '../actions';
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
  firstToken: null,
  secondToken: null,
};

export const courseTokenSwap = (state = initialState, action) => {
  switch (action.type) {
    case COURSE_TOKEN_INFO.LOAD_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };
    case COURSE_TOKEN_INFO.LOAD_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };
    case COURSE_TOKEN_INFO.LOAD_FAIL:
      return {
        ...state,
        data: setRequestError(state.data, action.message),
      };
    case COURSE_TOKEN_INFO.UPDATE_PENDING:
      return {
        ...state,
        data: setUpdatePending(state.data),
      };
    case COURSE_TOKEN_INFO.UPDATE_SUCCESS:
      return {
        ...state,
        data: setUpdateSuccess(state.data, action.data),
      };
    case COURSE_TOKEN_INFO.CHANGE_FIRST_TOKEN:
      return {
        ...state,
        firstToken: action.token,
      };
    case COURSE_TOKEN_INFO.CHANGE_SECOND_TOKEN:
      return {
        ...state,
        secondToken: action.token,
      };
    default:
      return state;
  }
};
