// pages/order/batch-send/index.js
import {
  ORDER_STATUS
} from "../../../common/index"
import {
  add_products_api_wechatorder_products_get,
  add_products_api_wechatorder_orders_post,
  add_products_api_wechatorder_orders_delivery
} from "../../../request/sneaker-service/Order"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderId: "",
    sendShopDialog: false,
    ORDER_STATUS,
    shopList: [],
    checkedList: [],
    status: "",
    addressInfo: {
      detail: "",
      name: "",
      phone: ""
    },
    formData: {
      addessOrder: "",
      addessType: "",
      phone: "",
      name: "",
      selectAddressData: "",
      finallyCost: ""
    }
  },
  onLoad(query) {
    this.setData({
      orderId: query.orderId,
      status: query.orderStatus || "",
      finallyCost: query.finallyCost || ""
    })
    this.getData(query.orderId)
  },
  onToAddress() {
    this.setData({
      sendShopDialog: true
    })
  },
  onAllAddress() {
    this.onChangeAll({
      detail: {
        checked: true
      }
    })
    this.onToAddress()
  },
  getData(orderId) {
    add_products_api_wechatorder_products_get({
      data: {
        order_id: orderId ?? ""
      }
    }).then(res => {
      if (res.data.code === 1) {
        this.setData({
          shopList: res.data.data.products,
          addressInfo: res.data.data.address
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
  closConfirm() {
    const { checkedList, orderId, formData, shopList } = this.data
    const { addessOrder, addessType, selectAddressData, name, phone } = formData
    if (!checkedList.length) {
      wx.showToast({
        title: '请选择发货商品',
      })
      return
    }
    if (!addessOrder || !selectAddressData || !addessType || !name || !phone) {
      wx.showToast({
        title: '请输入详细信息',
      })
      return
    }
    const update_product = [];
    for (let i = 0; i < shopList.length; i++) {
      const item = shopList[i];
      if (checkedList.includes(item.id)) {
        update_product.push({
          product_id: item.id,
          product_info_ids: item.product_infos.map(j => j.id),
          un_product_info_ids: []
        })
      }
    }
    add_products_api_wechatorder_orders_delivery({
      order_id: orderId,
      update_product,
      delivery_site: addessType,
      tracking_code: addessOrder,
      delivery_name: name,
      delivery_phone: phone,
      return_address: selectAddressData
    }).then(res => {
      if (res.data.code === 1) {
        wx.showToast({
          title: '发货成功，请耐心等待',
        })
        wx.navigateBack()
      }
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
    const { name, phone, detail } = this.data.addressInfo
    wx.setClipboardData({
      data: `姓名:${name}\n电话：${phone}\n地址：${detail}`,
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
