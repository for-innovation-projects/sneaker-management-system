import axios, { AxiosRequestConfig } from 'axios';
const request = axios.create({
  baseURL: '',
});
const customFetch = <T>(config: AxiosRequestConfig): Promise<T> => {
  return request(config) as any;
};
export default customFetch;
