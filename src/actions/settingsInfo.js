import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { SETTINGS_INFO } from './index';
import { performSettingsInfoData } from '../api/settings';

const setFail = (message) => ({
  type: SETTINGS_INFO.LOAD_FAIL,
  message,
});

const setLoaded = (data) => ({
  type: SETTINGS_INFO.LOAD_SUCCESS,
  data,
});

const setLoading = () => ({
  type: SETTINGS_INFO.LOAD_PENDING,
});

const setUpdated = (data) => ({
  type: SETTINGS_INFO.UPDATE_SUCCESS,
  data,
});

const setUpdating = () => ({
  type: SETTINGS_INFO.UPDATE_PENDING,
});

export const getSettingsInfo = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const { data } = await httpRequest.get(API.SETTINGS_INFO());
      dispatch(setLoaded(performSettingsInfoData(data)));
    } catch ({ response: { data = {}, status = 400 } = { response: { data: {}, status: 400 } } }) {
      dispatch(setFail(data.message));
    }
  };
};

export const updateSettingsInfo = () => {
  return async (dispatch) => {
    dispatch(setUpdating());

    try {
      const { data } = await httpRequest.get(API.SETTINGS_INFO());
      dispatch(setUpdated(performSettingsInfoData(data)));
    } catch ({ response: { data = {}, status = 400 } = { response: { data: {}, status: 400 } } }) {
      dispatch(setFail(data.message));
    }
  };
};
