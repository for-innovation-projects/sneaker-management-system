import {
  request
} from "../index";
export function wechat_authentication_api_wechatwithdrawal_withdrawal_get({
  data,
}) {
  return request({
    url: `/api/wechatwithdrawal/withdrawal`,
    method: 'get',
    data: data || {},
  }, );
}
export function wechat_authentication_api_wechatwithdrawal_withdrawal_post({
  data,
}) {
  return request({
    url: `/api/wechatwithdrawal/withdrawal`,
    method: 'post',
    data: data || {},
  }, );
}