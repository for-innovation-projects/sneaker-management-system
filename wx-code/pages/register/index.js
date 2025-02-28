// pages/register/register.js
import {
  countDown
} from '../../utils/index'
Page({
  data: {
    name: "",
    phone: "",
    idCard: "",
    verificationCode: "",
    isAgreed: false,
    isCounting: false,
    countDown: 0,
  },
  sendTimeDestroy: null,
  handleRegister() {
    if (!this.data.isAgreed) {
      wx.showToast({
        title: "请先同意用户协议",
        icon: "none",
      })
      return
    }

    // 这里添加注册逻辑
    wx.showToast({
      title: "注册功能开发中",
      icon: "none",
    })
  },

  handleSendCode() {
    if (this.data.isCounting) return
    this.setData({
      isCounting: true,
      countDown: 60,
    })
    this.sendTimeDestroy = countDown(60 * 1000, (resTime) => {
      if (resTime <= 0) {
        this.sendTimeDestroy = null
        this.setData({
          isCounting: false,
          countDown: 0
        })
      } else {
        this.setData({
          countDown: Math.round(resTime / 1000)
        })
      }
    })
  },

  handleLogin() {
    wx.navigateTo({
      url: "/pages/login/login",
    })
  },

  onAgreeChange(e) {
    this.setData({
      isAgreed: e.detail.checked,
    })
  },

  handleViewAgreement() {
    // 这里添加查看用户协议逻辑
    wx.showToast({
      title: "用户协议查看功能开发中",
      icon: "none",
    })
  },
  onUnload() {
    this.sendTimeDestroy?.()
  },
})
