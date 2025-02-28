// pages/order/components/shop-item/index..js
import {
  ORDER_STATUS
} from "../../../../common/index"
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    status: "",
    selectStatus: false,
    checked: false,
    value: ""
  },

  /**
   * 组件的初始数据
   */
  data: {
    ORDER_STATUS
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick() {
      if (!this.data.selectStatus) {
        wx.navigateTo({
          url: '/pages/order/create/index',
        })
        return
      }
      this.triggerEvent('change', {
        checked: !this.properties.checked,
        value: this.properties.value
      })

    },
    onClickShop() {
      console.log(111)
    },
    onDelete() {
      wx.showModal({
        title: '删除',
        content: '确定要删除么',
        complete: (res) => {
          if (res.cancel) {

          }
          if (res.confirm) {

          }
        }
      })
    }
  }
})
