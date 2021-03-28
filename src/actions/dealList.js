import { API } from '../constants/api';
import { DEAL_LIST } from './index';
import { httpRequest } from '../utils/request';
import { performDealListData, performDealProfitListData } from '../api/deal';

const setFail = (message) => ({
  type: DEAL_LIST.LOAD_FAIL,
  message,
});

const setLoaded = (data) => ({
  type: DEAL_LIST.LOAD_SUCCESS,
  data,
});

const setLoading = () => ({
  type: DEAL_LIST.LOAD_PENDING,
});

const setUpdated = (data) => ({
  type: DEAL_LIST.UPDATE_SUCCESS,
  data,
});

const setUpdating = () => ({
  type: DEAL_LIST.UPDATE_PENDING,
});

export const getDealList = ({ skip, take, profit = false }) => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const { data } = await httpRequest.get(API.DEAL_LIST({ skip, take, profit }));
      dispatch(setLoaded(performDealListData(data)));
    } catch ({ response: { data = {}, status = 400 } = { response: { data: {}, status: 400 } } }) {
      dispatch(setFail(data.message));
    }
  };
};

export const updateDealList = ({ skip, take, profit = false }) => {
  return async (dispatch) => {
    dispatch(setUpdating());

    try {
      const { data } = await httpRequest.get(API.DEAL_LIST({ skip, take, profit }));
      dispatch(setUpdated(performDealListData(data)));
    } catch ({ response: { data = {}, status = 400 } = { response: { data: {}, status: 400 } } }) {
      dispatch(setFail(data.message));
    }
  };
};
