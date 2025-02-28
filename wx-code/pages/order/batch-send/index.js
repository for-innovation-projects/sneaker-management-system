// pages/order/batch-send/index.js
import {
  ORDER_STATUS
} from "../../../common/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ORDER_STATUS,
    shopList: [{
      value: "aa"
    }, {
      value: "aa1"
    }, {
      value: "aa2"
    }, {
      value: "aa3"
    }, {
      value: "aa4"
    }],
    checkedList: [],
    status: ""
  },
  onLoad(query) {
    this.setData({
      status: query.orderStatus || ""
    })
    console.log(query)
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
      newCheckedList = this.data.shopList.map(item => item.value)
    }
    this.setData({
      checkedList: newCheckedList
    })
  }
})
