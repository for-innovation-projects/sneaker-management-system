import request from './index';
export function upload_file_api_banner_pc_upload_post(
  data: FormData,
  options: any,
) {
  return request<IApi.BannerUploadFileApiWechatbannerPcUploadPostResponses>({
    url: `/api/wechatbanner/pc/upload`,
    method: 'post',
    data,
    ...options,
  });
}
