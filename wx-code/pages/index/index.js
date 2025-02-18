import {
  onShareTimeline,
  onShareAppMessage
} from '../../utils/share'
Page({
  onShareTimeline,
  onShareAppMessage,
  data: {
    images: [
      'https://emoji.bj.bcebos.com/yige-aigc/index_aigc/final/toolspics/pc_aigc.png',
      'https://mp-4a5d90f2-d23e-4d23-8b5c-fe1ebb102bde.cdn.bspapp.com/cloudstorage/640 (1).webp',
      'https://mp-4a5d90f2-d23e-4d23-8b5c-fe1ebb102bde.cdn.bspapp.com/cloudstorage/640.webp'
    ]
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init();
  },

  
})
