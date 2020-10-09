import Axios from 'axios';

const axios = Axios.create({
  baseURL: `/api/v1`,
  timeout: 10000,
  withCredentials: true,
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    return Promise.reject(err.response);
  }
);

export default axios;
