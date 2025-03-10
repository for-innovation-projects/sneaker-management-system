import request from "../index";
export function add_products_api_wechatorder_products_post({
  data,
}: { data?: IApi.OrderAddProductsApiWechatorderProductsPostBody } = {}) {
  return request<IApi.OrderAddProductsApiWechatorderProductsPostResponses>({
    url: `/api/wechatorder/products`,
    method: "post",

    data: data || {},
  });
}
