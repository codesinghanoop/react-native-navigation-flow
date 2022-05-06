import axios from 'axios';
import { BASE_URL } from './endpoint';

export default () => {

  let axiosInstance = axios.create({
    _retryCount: 0,
    baseURL: BASE_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  } as any);

  axiosInstance.interceptors.response.use(
    response => {
      if (response.status === 401) {
      }
      return response;
    },
    error => {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.message);
    },
  );

  return axiosInstance;
};
