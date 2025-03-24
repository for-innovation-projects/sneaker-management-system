import {
  request
} from "../index";
export function api_wechatbanner_get({
  data,
} = {}) {
  return request({
    url: `/api/wechatbanner/`,
    method: "get",
    data: data || {},
  });
}
