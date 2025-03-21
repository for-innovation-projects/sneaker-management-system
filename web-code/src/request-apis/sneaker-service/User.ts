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
