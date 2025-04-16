// pages/order/batch-send/index.js
import {
  ORDER_STATUS
} from "../../../common/index"
import { add_products_api_wechatorder_products_get, add_products_api_wechatorder_orders_post } from "../../../request/sneaker-service/Order"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sendShopDialog: false,
    ORDER_STATUS,
    shopList: [],
    checkedList: [],
    status: "",
    formData: {
      addessOrder: "",
      addessType: "",
      phone: "",
      name: "",
      selectAddressData: "",
    }
  },
  onLoad(query) {
    this.setData({
      status: query.orderStatus || ""
    })
    this.getData(query.orderId)
  },
  getData(orderId) {
    add_products_api_wechatorder_products_get({
      data: {
        order_id: orderId ?? ""
      }
    }).then(res => {
      if (res.data.code === 1) {
        this.setData({
          shopList: res.data.data
        })
      }
    })
  },
  onChange(e) {
    const {
      checked,
      value
    } = e.detail
    let newCheckedList = [...this.data.checkedList]
    if (checked) {
      newCheckedList.push(value);
    } else {
      newCheckedList = newCheckedList.filter(item => item !== value)
    }
    newCheckedList = [...new Set(newCheckedList)]
    this.setData({
      checkedList: newCheckedList
    })
  },
  onChangeAll(e) {
    let newCheckedList = []
    if (e.detail.checked) {
      newCheckedList = this.data.shopList.map(item => item.id)
    }
    this.setData({
      checkedList: newCheckedList
    })
  },
  closeDialog() {
    this.setData({
      sendShopDialog: false
    })
  },
  onSendShop() {
    this.setData({
      sendShopDialog: true
    })
  },
  onCopyAddress() {
    wx.setClipboardData({
      data: '谢谢谢谢',
      success() {
        wx.showToast({
          title: '复制成功',
          icon: "none"
        })
      }
    })
  },
  onInputValue(e) {
    const {
      item
    } = e.currentTarget.dataset;
    const {
      value = ''
    } = e.detail;
    this.setData({
      [`formData.${item}`]: value,
    });
  },
  onSelectAddress() {
    wx.chooseAddress({
      success: (data) => {
        if (!this.data.formData.phone) {
          this.setData({
            ['formData.phone']: data.telNumber
          })
        }
        if (!this.data.formData.name) {
          this.setData({
            ['formData.name']: data.userName
          })
        }
        this.setData({
          ['formData.selectAddressData']: data.provinceName + data.cityName + data.countyName + (data.detailInfo || data.detailInfoNew)
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  onOders() {
    if (!this.data.checkedList.length) {
      wx.showToast({
        title: '请选择要审核的商品',
        icon: 'none'
      })
      return
    }
    add_products_api_wechatorder_orders_post({
      data: {
        product_ids: this.data.checkedList
      }
    }).then(res => {
      if (res.data.code === 1) {
        wx.showToast({
          title: '审核中，请耐心等待',
          icon: 'none'
        })
        wx.navigateBack()
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
})
