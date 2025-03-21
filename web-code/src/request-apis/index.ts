import { getJWT } from '@/utils/storage';
import axios, { AxiosRequestConfig } from 'axios';
const request = axios.create({
  baseURL: 'http://28ag3r.natappfree.cc',
});
request.interceptors.request.use(
  function (config) {
    if (['/api/wechatuser/pc/login'].includes(config.url!)) {
      return config;
    }
    const token = getJWT();
    config.headers!.Authorization = `Bearer ${token}`;
    return config; // 必须返回 config 对象
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);
request.interceptors.response.use(
  function (response) {
    return response.data; // 必须返回 config 对象
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);
const customFetch = <T>(config: AxiosRequestConfig): Promise<T> => {
  return request(config) as any;
};
export default customFetch;
