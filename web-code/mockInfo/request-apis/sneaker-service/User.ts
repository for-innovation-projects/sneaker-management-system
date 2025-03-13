import request from '../index';
export function wechat_login_api_wechatuser_login_post({
  data,
}: { data?: IApi.UserWechatLoginApiWechatuserLoginPostBody } = {}) {
  return request<IApi.UserWechatLoginApiWechatuserLoginPostResponses>({
    url: `/api/wechatuser/login`,
    method: 'post',
    data: data || {},
  });
}
export function wechat_authentication_api_wechatuser_authentication_post({
  data,
}: {
  data?: IApi.UserWechatAuthenticationApiWechatuserAuthenticationPostBody;
} = {}) {
  return request<IApi.UserWechatAuthenticationApiWechatuserAuthenticationPostResponses>(
    {
      url: `/api/wechatuser/authentication`,
      method: 'post',
      data: data || {},
    },
  );
}
export function wechat_authentication_api_wechatuser_receive_post({
  data,
}: { data?: IApi.UserWechatAuthenticationApiWechatuserReceivePostBody } = {}) {
  return request<IApi.UserWechatAuthenticationApiWechatuserReceivePostResponses>(
    {
      url: `/api/wechatuser/receive`,
      method: 'post',
      data: data || {},
    },
  );
}
export function wechat_authentication_api_wechatuser_receive_patch({
  data,
}: { data?: IApi.UserWechatAuthenticationApiWechatuserReceivePatchBody } = {}) {
  return request<IApi.UserWechatAuthenticationApiWechatuserReceivePatchResponses>(
    {
      url: `/api/wechatuser/receive`,
      method: 'patch',

      data: data || {},
    },
  );
}
export function wechat_authentication_api_wechatuser_information_get({
  data,
}: {
  data?: IApi.UserWechatAuthenticationApiWechatuserInformationGetBody;
} = {}) {
  return request<IApi.UserWechatAuthenticationApiWechatuserInformationGetResponses>(
    {
      url: `/api/wechatuser/information`,
      method: 'get',

      data: data || {},
    },
  );
}
export function send_verification_code_api_wechatuser_send_verification_code_post({
  data,
}: {
  data?: IApi.UserSendVerificationCodeApiWechatuserSendVerificationCodePostBody;
} = {}) {
  return request<IApi.UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponses>(
    {
      url: `/api/wechatuser/send-verification-code`,
      method: 'post',

      data: data || {},
    },
  );
}
export function verify_code_api_wechatuser_verify_code_post({
  data,
}: { data?: IApi.UserVerifyCodeApiWechatuserVerifyCodePostBody } = {}) {
  return request<IApi.ResponseVerifyCodeApiWechatuserVerifyCodePost>({
    url: `/api/wechatuser/verify-code`,
    method: 'post',
    data: data || {},
  });
}
