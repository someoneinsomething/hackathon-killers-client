import axios from 'axios';

const transformResponse = (data, headers) => {
  if (headers['content-type'] === 'text/plain; charset=UTF-8') return data;
  if (!data) {
    return null;
  }
  data = JSON.parse(data);
  return data;
};

export const httpRequest = axios.create({
  timeout: 100000,
  transformResponse: [transformResponse],
});

const onResponseSuccess = (response) => {
  return response;
};

const onResponseError = (error) => {
  if (!error.response) {
    error.response = { data: { message: '' } };
  }

  return Promise.reject(error);
};

httpRequest.interceptors.response.use(onResponseSuccess, onResponseError);
