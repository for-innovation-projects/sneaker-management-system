import {
  getOpenId
} from "../utils/store"
export const request = (params = {}) => {
  const {
    url,
    method,
    data
  } = params
  const result = getOpenId() || {}
  return new Promise((resolve, reject) => {
    wx.request({
      url: "http://89ipri.natappfree.cc" + url,
      data: {
        ...result,
        ...data
      },
      method,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })

}
