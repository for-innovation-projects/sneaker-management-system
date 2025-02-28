import {
  onShareTimeline,
  onShareAppMessage
} from '../../utils/share'
import {
  ORDER_STATUS
} from '../../common/index'
Page({
  onShareTimeline,
  onShareAppMessage,
  data: {
    ORDER_STATUS,
    value: 'curOrder',
    current: 0,
    tabsList: [{
      label: "当前订单",
      value: 'curOrder'
    }, {
      label: "审核中",
      value: 'process'
    }, {
      label: "待确认",
      value: 'beConfirmed'
    }, {
      label: "退货订单",
      value: 'returnGood'
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
  },
  onCreateOrder() {
    wx.navigateTo({
      url: '/pages/order/create/index',
    })
  }
})
