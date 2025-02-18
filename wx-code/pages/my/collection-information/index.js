// pages/my/collection-information/index.js
import Toast from 'tdesign-miniprogram/toast/index';
import {
  innerPhoneReg,
  innerNameReg,
  countDown
} from '../../../utils/index'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      name: "",
      account: "",
      phone: "",
      code: ""
    },
    submitActive: false,
    verifyPhoneText: "发送验证码",
    verifyPhone: false
  },
  sendTimeDestroy: null,
  privateData: {
    verifyTip: ""
  },
  onUnload() {
    this.sendTimeDestroy?.()
  },
  onSendCode() {
    if (!innerPhoneReg.test(this.data.formData.phone)) {
      Toast({
        context: this,
        selector: '#t-toast',
        message: "请输入正确的手机号",
        icon: '',
        duration: 1000,
      });
      return
    }
    if (this.sendTimeDestroy) return;
    const countTime = 10
    this.setData({
      verifyPhoneText: countTime + 's',
      verifyPhone: true
    })
    this.sendTimeDestroy = countDown(countTime * 1000, (resTime) => {
      if (resTime <= 0) {
        this.sendTimeDestroy = null
        this.setData({
          verifyPhone: false,
          verifyPhoneText: '发送验证码'
        })
      } else {
        this.setData({
          verifyPhoneText: Math.round(resTime / 1000) + 's'
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
      },
      () => {
        const {
          isLegal,
          tips
        } = this.onVerifyInputLegal();
        this.setData({
          submitActive: isLegal,
        });
        this.privateData.verifyTips = tips;
      },
    );
  },
  onVerifyInputLegal() {
    const {
      name,
      phone,
      code,
      account
    } = this.data.formData;
    if (!name || !name.trim()) {
      return {
        isLegal: false,
        tips: '请填写收货人',
      };
    }
    if (!innerNameReg.test(name)) {
      return {
        isLegal: false,
        tips: '姓名仅支持输入中文、英文（区分大小写）、数字',
      };
    }
    if (!innerPhoneReg.test(phone)) {
      return {
        isLegal: false,
        tips: '请填写正确的手机号',
      };
    }
    if (!code || !code.trim()) {
      return {
        isLegal: false,
        tips: '请填写收货人',
      };
    }
    if (!account || !account.trim()) {
      return {
        isLegal: false,
        tips: '请填写收货人',
      };
    }
    return {
      isLegal: true,
      tips: '',
    };
  },
  formSubmit() {
    const {
      submitActive
    } = this.data;
    if (!submitActive) {
      Toast({
        context: this,
        selector: '#t-toast',
        message: this.privateData.verifyTips,
        icon: '',
        duration: 1000,
      });
      return;
    }
    wx.navigateBack()
  }
})
