import {
  onShareTimeline,
  onShareAppMessage
} from '../../utils/share'
import {
  api_wechatbanner_get
} from "../../request/sneaker-service/Banner"
Page({
  onShareTimeline,
  onShareAppMessage,
  data: {
    images: []
  },
  onLoad() {
    api_wechatbanner_get().then(res => {
      if (res.data.code === 1) {
        this.setData({
          images: res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init();
  },


})
