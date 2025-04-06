import {
  request,
  uploadFile
} from "../index";
export function add_products_api_wechatorder_products_post({
  data,
} = {}) {
  return request({
    url: `/api/wechatorder/products`,
    method: "post",

    data: data || {},
  });
}

export function add_products_api_wechatorder_upload_batch(tempFilePaths) {
  return Promise.all(tempFilePaths.map(path => uploadFile(path)))
}

export function add_products_api_wechatorder_products_get({
  data,
} = {}) {
  return request({
    url: `/api/wechatorder/products`,
    method: "get",
    data: data || {},
  });
}

export function add_products_api_wechatorder_products_delete(product_id) {
  return request({
    url: `/api/wechatorder/products/${product_id}`,
    method: "delete",
  });
}

export function add_products_api_wechatorder_orders_post({
  data,
} = {}) {
  return request({
    url: `/api/wechatorder/orders`,
    method: "post",
    data: data || {},
  });
}

export function add_products_api_wechatorder_orders_get({
  data,
} = {}) {
  return request({
    url: `/api/wechatorder/orders`,
    method: "get",
    data: data || {},
  });
}