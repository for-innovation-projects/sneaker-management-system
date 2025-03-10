import axios from 'axios';
const request = axios.create({
  baseURL: '',
});
const a = ()=>{
  return request({})
}
export default request;