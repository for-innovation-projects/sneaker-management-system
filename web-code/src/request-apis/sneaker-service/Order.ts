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
export function update_orders_pc_api_wechatorder_pc_orders_patch({
  params,
  data,
}: {
  params?: IApi.OrderUpdateOrdersPcApiWechatorderPcOrdersPatchParams;
  data?: IApi.OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBody;
} = {}) {
  return request<IApi.OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponses>({
    url: `/api/wechatorder/pc/orders`,
    method: "patch",
    params: params || {},
    data: data || {},
  });
}
export function add_return_goods_api_wechatorder_pc_return_post({
  params,
}: { params?: IApi.OrderAddReturnGoodsApiWechatorderPcReturnPostParams } = {}) {
  return request<IApi.OrderAddReturnGoodsApiWechatorderPcReturnPostResponses>({
    url: `/api/wechatorder/pc/return`,
    method: "post",
    params: params || {},
  });
}
export function update_products_pc_api_wechatorder_pc_products_patch({
  params,
  data,
}: {
  params?: IApi.OrderUpdateProductsPcApiWechatorderPcProductsPatchParams;
  data?: IApi.OrderUpdateProductsPcApiWechatorderPcProductsPatchBody;
} = {}) {
  return request<IApi.OrderUpdateProductsPcApiWechatorderPcProductsPatchResponses>(
    {
      url: `/api/wechatorder/pc/products`,
      method: "patch",
      params: params || {},
      data: data || {},
    },
  );
}
