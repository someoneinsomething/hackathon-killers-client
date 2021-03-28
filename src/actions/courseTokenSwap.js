import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { COURSE_TOKEN_INFO } from './index';
import { performCourseTokenInfoData } from '../api/course';

const setFail = (message) => ({
  type: COURSE_TOKEN_INFO.LOAD_FAIL,
  message,
});

const setLoaded = (data) => ({
  type: COURSE_TOKEN_INFO.LOAD_SUCCESS,
  data,
});

const setLoading = () => ({
  type: COURSE_TOKEN_INFO.LOAD_PENDING,
});

const setUpdated = (data) => ({
  type: COURSE_TOKEN_INFO.UPDATE_SUCCESS,
  data,
});

const setUpdating = () => ({
  type: COURSE_TOKEN_INFO.UPDATE_PENDING,
});

export const changeFirstToken = (token) => ({
  type: COURSE_TOKEN_INFO.CHANGE_FIRST_TOKEN,
  token,
});

export const changeSecondToken = (token) => ({
  type: COURSE_TOKEN_INFO.CHANGE_SECOND_TOKEN,
  token,
});

export const getCourseTokenInfo = ({ token }) => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      // const { data } = await httpRequest.get(API.COURSE_TOKEN_INFO({ token }));
      // dispatch(setLoaded(performCourseTokenInfoData(data)));
      dispatch(setLoaded());
    } catch ({ response: { data = {}, status = 400 } = { response: { data: {}, status: 400 } } }) {
      dispatch(setFail(data.message));
    }
  };
};

export const updateCourseTokenInfo = ({ token }) => {
  return async (dispatch) => {
    dispatch(setUpdating());

    try {
      // const { data } = await httpRequest.get(API.COURSE_TOKEN_INFO({ token }));
      // dispatch(setUpdated(performCourseTokenInfoData(data)));
      dispatch(setUpdated());
    } catch ({ response: { data = {}, status = 400 } = { response: { data: {}, status: 400 } } }) {
      dispatch(setFail(data.message));
    }
  };
};
