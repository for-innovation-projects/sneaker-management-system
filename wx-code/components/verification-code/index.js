// components/verification-code/index.js
import {
  countDown
} from '../../utils/index'
import {
  send_verification_code_api_wechatuser_send_verification_code_post
} from "../../request/sneaker-service/User"
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    phone: "",
    value: ""
  },
  lifetimes: {
    detached: function () {
      if (this.data.sendTimeDestroy) {
        this.data.sendTimeDestroy()
      }
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    isCounting: false,
    countDown: 0,
    sendTimeDestroy: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInputValue(e) {
      this.triggerEvent('change', e.detail)
    },
    async handleSendCode() {
      if (this.data.isCounting) return
      const res = await send_verification_code_api_wechatuser_send_verification_code_post({
        data: {
          phone_number: this.properties.phone
        }
      })
      this.setData({
        isCounting: true,
        countDown: 60,
      })
      this.data.sendTimeDestroy = countDown(60 * 1000, (resTime) => {
        if (resTime <= 0) {
          this.data.sendTimeDestroy = null
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
  }
})