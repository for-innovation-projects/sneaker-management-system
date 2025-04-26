// pages/order/components/shop-item/index..js
import {
  ORDER_STATUS
} from "../../../../common/index"
import { add_products_api_wechatorder_products_delete, add_products_api_wechatorder_orders_post } from "../../../../request/sneaker-service/Order"
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    status: "",
    selectStatus: false,
    checked: false,
    value: "",
    itemInfo: {}
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
        // wx.navigateTo({
        //   url: '/pages/order/create/index',
        // })
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
          if (res.confirm) {
            add_products_api_wechatorder_products_delete(this.properties.itemInfo.id).then(res => {
              if (res.data.code === 1) {
                wx.showToast({
                  title: '删除成功',
                  icon: 'none'
                })
                this.triggerEvent('reload')
              } else {
                wx.showToast({
                  title: res.data.msg || '删除失败',
                  icon: 'none'
                })
              }
            }).catch(() => {
              wx.showToast({
                title: '删除失败',
                icon: 'none'
              })
            })
          }
        }
      })
    },
    onOrder() {
      add_products_api_wechatorder_orders_post({
        data: {
          product_ids: [this.properties.itemInfo.id]
        }
      }).then(res => {
        if (res.data.code === 1) {
          wx.showToast({
            title: '审核中，请耐心等待',
            icon: 'none'
          })
          this.triggerEvent('reload')
        } else {
          wx.showToast({
            title: res.data.msg || "失败",
            icon: 'none'
          })
        }
      }).catch(() => {
        wx.showToast({
          title: '请重新尝试',
          icon: 'none'
        })
      })
    }
  }
})
