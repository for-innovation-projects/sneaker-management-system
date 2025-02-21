// pages/order/batch-send/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    checkedList: []
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
