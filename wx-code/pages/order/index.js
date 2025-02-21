import {
  onShareTimeline,
  onShareAppMessage
} from '../../utils/share'
Page({
  onShareTimeline,
  onShareAppMessage,
  data: {
    value: 'curOrder',
    current: 0,
    tabsList: [{
      label: "当前订单",
      value: 'curOrder'
    }, {
      label: "处理中",
      value: 'fail'
    }, {
      label: "待确认",
      value: 'toBeConfirmed'
    }, {
      label: "退货订单",
      value: 'returnGoods'
    }, {
      label: "已完成",
      value: 'finish'
    }],
    transform: "translate(0px,0px)"
  },
  onShow() {
    this.getTabBar().init();
  },
  onTabsChange(e) {
    const index = this.data.tabsList.findIndex(item => item.value === e.detail.value)
    this.setData({
      value: e.detail.value,
      current: index
    })
  },
  onChangeSwiper(e) {
    this.setData({
      value: this.data.tabsList[e.detail.current].value,
      current: e.detail.current
    })
  },
  onBatchSend() {
    wx.navigateTo({
      url: '/pages/order/batch-send/index',
    })
  }
})
