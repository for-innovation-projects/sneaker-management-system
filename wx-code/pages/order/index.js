import {
  onShareTimeline,
  onShareAppMessage
} from '../../utils/share'
import {
  ORDER_STATUS
} from '../../common/index'
import { add_products_api_wechatorder_products_get, add_products_api_wechatorder_orders_get } from "../../request/sneaker-service/Order"
Page({
  onShareTimeline,
  onShareAppMessage,
  data: {
    ORDER_STATUS,
    value: ORDER_STATUS.curOrder,
    current: 0,
    tabsList: [{
      label: "当前商品",
      value: ORDER_STATUS.curOrder,
      data: []
    }, {
      label: "审核中",
      value: ORDER_STATUS.process,
      data: []
    }, {
      label: "待确认",
      value: ORDER_STATUS.beConfirmed,
      data: []
    }, {
      label: "退货订单",
      value: ORDER_STATUS.returnGood,
      data: []
    }, {
      label: "已完成",
      value: ORDER_STATUS.finish,
      data: []
    }],
    transform: "translate(0px,0px)",
    shopItemList: []
  },
  onShow() {
    this.getTabBar().init();
    if (this.data.value === ORDER_STATUS.curOrder) {
      this.getCurShopData()
    } else {
      this.getOrderData()
    }
  },
  getOrderData() {
    const status = this.data.value
    const current = this.data.current
    add_products_api_wechatorder_orders_get({
      data: { status }
    }).then(res => {
      if (res.data.code === 1) {
        this.setData({
          [`tabsList[${current}].data`]: res.data.data
        })
      }
    })
  },
  getCurShopData() {
    add_products_api_wechatorder_products_get({
      data: {}
    }).then(res => {
      if (res.data.code === 1) {
        this.setData({
          shopItemList: res.data.data.products
        })
      }
    })
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
    }, () => {
      if (this.data.value === ORDER_STATUS.curOrder) {
        !this.data.shopItemList.length && this.getCurShopData()
      } else {
        !this.data.tabsList[e.detail.current].data.length && this.getOrderData()
      }
    })

  },
  onBatchSend() {
    wx.navigateTo({
      url: '/pages/order/batch-send/index?orderStatus=' + ORDER_STATUS.curOrder,
    })
  },
  onCreateOrder() {
    wx.navigateTo({
      url: '/pages/order/create/index',
    })
  }
})
