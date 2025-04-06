import request from "../index";
export function get_orders_pc_api_wechatorder_pc_orders_get({
  params,
}: { params?: IApi.OrderGetOrdersPcApiWechatorderPcOrdersGetParams } = {}) {
  return request<IApi.OrderGetOrdersPcApiWechatorderPcOrdersGetResponses>({
    url: `/api/wechatorder/pc/orders`,
    method: "get",
    params: params || {},
  });
}
