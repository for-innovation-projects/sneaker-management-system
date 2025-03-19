// pages/register/register.js
import {
  setOpenId
} from "../../utils/store"
import {
  verify_code_api_wechatuser_registry_post
} from "../../request/sneaker-service/User"
Page({
  data: {
    formData: {
      name: "",
      phone: "",
      idCard: "",
      code: ""
    },
    isAgreed: false,
  },
  sendTimeDestroy: null,
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
  async handleRegister() {
    const {
      name,
      phone,
      idCard,
      code
    } = this.data.formData
    if (!name || !phone || !idCard || !code) {
      wx.showToast({
        title: "请输入以上所以信息",
        icon: "none",
      })
      return
    }
    if (!this.data.isAgreed) {
      wx.showToast({
        title: "请先同意用户协议",
        icon: "none",
      })
      return
    }
    wx.login({
      success: async (res) => {
        const registryRes = await verify_code_api_wechatuser_registry_post({
          data: {
            "code": res.code,
            "name": name,
            "phone": phone,
            "id_code": idCard,
            "verify_code": code
          }
        })
        if (registryRes.data.code === 1) {
          setOpenId(registryRes.data.data);
          wx.switchTab({
            url: '/pages/index/index',
          })
        }
      },
    })

  },



  handleLogin() {
    wx.navigateBack()
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