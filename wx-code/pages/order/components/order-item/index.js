// pages/order/components/order-item/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    status: '',
    orderId: '',
    finallyCost: '',
    time: ''
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onShopList() {
      wx.navigateTo({
        url: '/pages/order/batch-send/index?orderStatus=' + this.properties.status + '&orderId=' + this.properties.orderId + '&finallyCost=' + this.properties.finallyCost,
      })
    }
  }
})
