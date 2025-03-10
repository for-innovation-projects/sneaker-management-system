import request from "../index";
export function root_api_log_list_get({
  params,
}: { params?: IApi.LogRootApiLogListGetParams } = {}) {
  return request<IApi.LogRootApiLogListGetResponses>({
    url: `/api/log/list`,
    method: "get",
    params: params || {},
  });
}
