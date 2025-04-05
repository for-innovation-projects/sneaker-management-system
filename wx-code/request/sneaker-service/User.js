import {
  request
} from "../index";
export function wechat_login_api_wechatuser_login_post({
  data,
} = {}) {
  return request({
    url: `/api/wechatuser/login`,
    method: 'post',
    data: data || {},
  });
}
export function wechat_authentication_api_wechatuser_authentication_post({
  data,
}) {
  return request({
    url: `/api/wechatuser/authentication`,
    method: 'post',
    data: data || {},
  }, );
}
export function wechat_authentication_api_wechatuser_receive_post({
  data,
}) {
  return request({
    url: `/api/wechatuser/receive`,
    method: 'post',
    data: data || {},
  }, );
}
export function wechat_authentication_api_wechatuser_receive_patch({
  data,
}) {
  return request({
    url: `/api/wechatuser/receive`,
    method: 'patch',

    data: data || {},
  });
}
export function wechat_authentication_api_wechatuser_information_get({
  data,
}) {
  return request({
    url: `/api/wechatuser/information`,
    method: 'get',

    data: data || {},
  }, );
}
export function send_verification_code_api_wechatuser_send_verification_code_post({
  data,
}) {
  return request({
    url: `/api/wechatuser/send-verification-code`,
    method: 'post',
    data: data || {},
  }, );
}
export function verify_code_api_wechatuser_verify_code_post({
  data,
}) {
  return request({
    url: `/api/wechatuser/verify-code`,
    method: 'post',
    data: data || {},
  });
}
export function verify_code_api_wechatuser_registry_post({
  data,
}) {
  return request({
    url: `/api/wechatuser/registry`,
    method: 'post',
    data: data || {},
  });
}
export function api_wechatuser_information_get({
  data,
}) {
  return request({
    url: `/api/wechatuser/information`,
    method: 'get',
    data: data || {},
  });
}
export function api_wechatuser_status_get({
  data,
}) {
  return request({
    url: `/api/wechatuser/status`,
    method: 'get',
    data: data || {},
  });
}