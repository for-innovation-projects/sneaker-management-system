import request from "../index";
export function login_for_access_token_api_wechatuser_pc_login_post({
  data,
}: { data?: IApi.UserLoginForAccessTokenApiWechatuserPcLoginPostBody } = {}) {
  return request<IApi.UserLoginForAccessTokenApiWechatuserPcLoginPostResponses>(
    {
      url: `/api/wechatuser/pc/login`,
      method: "post",

      data: data || {},
    },
  );
}
export function get_users_api_wechatuser_pc_wechat_get({
  params,
}: { params?: IApi.UserGetUsersApiWechatuserPcWechatGetParams } = {}) {
  return request<IApi.UserGetUsersApiWechatuserPcWechatGetResponses>({
    url: `/api/wechatuser/pc/wechat`,
    method: "get",
    params: params || {},
  });
}
export function unban_wechat_user_api_wechatuser_pc_wechat_post({
  params,
}: { params?: IApi.UserUnbanWechatUserApiWechatuserPcWechatPostParams } = {}) {
  return request<IApi.UserUnbanWechatUserApiWechatuserPcWechatPostResponses>({
    url: `/api/wechatuser/pc/wechat`,
    method: "post",
    params: params || {},
  });
}
export function ban_wechat_user_api_wechatuser_pc_wechat_delete({
  params,
}: { params?: IApi.UserBanWechatUserApiWechatuserPcWechatDeleteParams } = {}) {
  return request<IApi.UserBanWechatUserApiWechatuserPcWechatDeleteResponses>({
    url: `/api/wechatuser/pc/wechat`,
    method: "delete",
    params: params || {},
  });
}
export function modify_balance_api_wechatuser_pc_wechat_patch({
  params,
}: { params?: IApi.UserModifyBalanceApiWechatuserPcWechatPatchParams } = {}) {
  return request<IApi.UserModifyBalanceApiWechatuserPcWechatPatchResponses>({
    url: `/api/wechatuser/pc/wechat`,
    method: "patch",
    params: params || {},
  });
}
