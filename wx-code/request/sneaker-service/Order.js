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