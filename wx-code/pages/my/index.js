// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visibleMessage: false,
    currAuthStep: "3",
    userInfo: {
      avatarUrl: 'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg',
      nickName: '热情仔',
      phoneNumber: '13438358888',
      gender: 2,
    },
  },
  onWithdraw() {
    this.setData({
      visibleMessage: true
    })
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
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  onShareTimeline(e) {
    console.log(e, 1111)
    return {
      userName: '小程序原始id',
      path: 'pages/index/index',
      title: '标题',
    }
  }
})
