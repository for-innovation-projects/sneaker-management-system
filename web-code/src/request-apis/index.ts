import { getJWT } from '@/utils/storage';
import { history } from '@umijs/max';
import { message } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';
const request = axios.create({
  baseURL: 'http://k8ad8b.natappfree.cc/',
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
    if (response.data.code !== 1) {
      message.error(response.data.message);
    }
    return response.data; // 必须返回 config 对象
  },
  function (error) {
    try {
      if (error?.response?.status === 401) {
        history.replace('/login');
      }
    } catch (err) {
      console.log(err);
    }

    // 对请求错误做些什么
    return Promise.reject(error);
  },
);
const customFetch = <T>(config: AxiosRequestConfig): Promise<T> => {
  return request(config) as any;
};
export default customFetch;
