// pages/order/components/shop-item/index..js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    selectStatus: false
  },

  /**
   * 组件的初始数据
   */
  data: {
    checked: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick() {
      this.setData({
        checked: !this.data.checked
      })
    },
    onClickShop(){
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
