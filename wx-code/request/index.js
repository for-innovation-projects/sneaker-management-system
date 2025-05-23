import {
  getOpenId
} from "../utils/store"
const baseUrl = "http://k8ad8b.natappfree.cc"
export const request = (params = {}) => {
  const {
    url,
    method,
    data
  } = params
  const result = getOpenId() || {}
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data: {
        ...result,
        ...data
      },
      method,
      success(res) {
        if (res.data.code !== 1) {
          wx.showToast({
            title: res.data.msg || '请重新尝试',
            icon: 'none'
          })
        }
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
// 封装单文件上传为 Promise
export const uploadFile = (filePath) => {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: baseUrl + '/api/wechatorder/upload',
      filePath: filePath,
      name: 'file', // 后端接收文件的字段名
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(res.data)); // 上传成功，解析后端响应
        } else {
          reject(res); // 非 200 状态码视为失败
        }
      },
      fail: (err) => {
        reject(err); // 网络错误或上传失败
      }
    });
  });
};
