// pages/index/index.js
Page({
  data: {
    images: [
      'https://emoji.bj.bcebos.com/yige-aigc/index_aigc/final/toolspics/pc_aigc.png',
      'https://mp-4a5d90f2-d23e-4d23-8b5c-fe1ebb102bde.cdn.bspapp.com/cloudstorage/640 (1).webp',
      'https://mp-4a5d90f2-d23e-4d23-8b5c-fe1ebb102bde.cdn.bspapp.com/cloudstorage/640.webp'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
