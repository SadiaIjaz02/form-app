import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const client = axios.create({ baseURL: 'http://localhost:3001' });

export const request = (options: AxiosRequestConfig) => {
  client.defaults.headers.common.Authorization = 'Bearer token';
  
  const onSuccess = (response: AxiosResponse) => response.data;
  const onError = (error: AxiosError) => {
    throw error;
  };

  return client(options).then(onSuccess).catch(onError);
};
