import request from "../index";
export function upload_file_api_upload__post() {
  return request<IApi.UploadUploadFileApiUpload_PostResponses>({
    url: `/api/upload/`,
    method: "post",
  });
}
