// pages/sign-in/index.js
import {
  innerPhoneReg,
} from '../../utils/index'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      phone: "",
      code: ""
    }
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
  handleLogin() {
    const {
      phone,
      code
    } = this.data.formData
    let text = '';
    if (!phone) {
      text = '请输入手机号'
    } else if (!innerPhoneReg.test(phone)) {
      text = '请填写正确的手机号'
    }
    if (text) {
      wx.showToast({
        title: text,
        icon: "none"
      })
    } else {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  },
  handleRegister() {
    wx.navigateTo({
      url: '/pages/register/index',
    })
  }
})
