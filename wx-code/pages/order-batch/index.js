import { api_wechatuser_information_get } from "../../request/sneaker-service/User"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qrCode: ''
  },
  /**
     * 生命周期函数--监听页面显示
     */
  onShow() {
    this.getTabBar().init();
    api_wechatuser_information_get({ data: {} }).then(result => {
      if (result.data.code === 1) {
        this.setData({
          qrCode: result.data.data.admin_image
        })
      }
    })
  },
})