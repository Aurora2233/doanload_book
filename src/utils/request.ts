import { BaseURL } from '@/constants';
import axios, {
  type AxiosRequestConfig,
  type CreateAxiosDefaults,
  type AxiosResponse,
} from 'axios';

// 配置信息

const requestConfig: CreateAxiosDefaults = {
  baseURL: BaseURL,
  timeout: 30000,
};

const request = axios.create(requestConfig);

// 请求拦截
request.interceptors.request.use(
  (config) => {
    console.log(config, 'config');

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 响应拦截
request.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const get = (
  url: string,
  params: unknown,
  config?: Omit<AxiosRequestConfig, 'url' | 'method' | 'params'>
) => {
  return request<AxiosResponse>({
    url: url,
    method: 'GET',
    params: params,
    ...config,
  });
};

const post = (
  url: string,
  params: unknown,
  config?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>
) => {
  return request({
    url: url,
    method: 'POST',
    data: params,
    ...config,
  });
};

export { get, post };
