// pages/sign-in/index.js
import {
  innerPhoneReg,
} from '../../utils/index'
import {
  setOpenId,
} from '../../utils/store'
import {
  wechat_login_api_wechatuser_login_post
} from "../../request/sneaker-service/User"
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
    if (!code) {
      text = '请填输入验证码'
    }
    if (text) {
      wx.showToast({
        title: text,
        icon: "none"
      })
    } else {
      wx.login({
        success: async (res) => {
          try {
            const result = await wechat_login_api_wechatuser_login_post({
              code: res.code
            })
            setOpenId(result.data);
            
          } catch (error) {
            wx.showToast({
              title: "网络异常",
              icon: "error"
            })
          }
        },
      })
    }
  },
  handleRegister() {
    wx.navigateTo({
      url: '/pages/register/index',
    })
  }
})
