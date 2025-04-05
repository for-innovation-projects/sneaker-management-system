import {
  onShareTimeline,
  onShareAppMessage
} from '../../utils/share'
import { api_wechatuser_information_get } from "../../request/sneaker-service/User"
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
    remainingSum: "-",
    qrCode: ''
  },
  onGetInfo() {
    api_wechatuser_information_get({ data: {} }).then(result => {
      if (result.data.code === 1) {
        this.setData({
          userInfo: {
            ...this.data.userInfo,
            nickName: result.data.data.name
          },
          remainingSum: result.data.data.balance,
          qrCode: result.data.data.admin_image
        })
      }
    })
  },
  onShow() {
    this.getTabBar().init();
    this.onGetInfo()
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
})
