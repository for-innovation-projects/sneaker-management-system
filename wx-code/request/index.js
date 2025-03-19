export const request = (params = {}) => {
  const {
    url,
    method,
    data
  } = params
  return new Promise((resolve, reject) => {
    wx.request({
      url: "http://kmexhj.natappfree.cc" + url,
      data,
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