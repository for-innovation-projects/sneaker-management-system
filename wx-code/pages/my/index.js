import {
  onShareTimeline,
  onShareAppMessage
} from '../../utils/share'
Page({
  onShareTimeline,
  onShareAppMessage,
  data: {
    visibleMessage: false,
    currAuthStep: "3",
    userInfo: {
      avatarUrl: 'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg',
      nickName: '热情仔',
      phoneNumber: '13438358888',
      gender: 2,
    },
    remainingSum: "10.00",
    qrCode: 'https://mp-4a5d90f2-d23e-4d23-8b5c-fe1ebb102bde.cdn.bspapp.com/cloudstorage/31739773342.jpg'
  },
  onQrCodeTab() {
    wx.previewImage({
      urls: [this.data.qrCode],
      showmenu: true
    })
  },
  onWithdraw() {
    this.setData({
      visibleMessage: true
    })
  },
  onCollectionInformation() {
    wx.navigateTo({
      url: '/pages/my/collection-information/index',
    })
  },
  onWithdrawalRecord() {
    wx.navigateTo({
      url: '/pages/my/withdrawal-record/index',
    })
  },
  onShow() {
    this.getTabBar().init();
  },
})
