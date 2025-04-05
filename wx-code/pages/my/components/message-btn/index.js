import Message from 'tdesign-miniprogram/message/index';
import {
  getWithdrawalShare
} from '../../../../utils/store'
import { wechat_authentication_api_wechatwithdrawal_withdrawal_post } from "../../../../request/sneaker-service/Withdrawal"
Component({
  /**
   * 组件的初始数据
   */
  data: {
    visible: false,
    priceError: false,
    money: "0"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDialog(e) {
      this.setData({
        visible: true,
      });
    },
    closeDialog() {
      this.setData({
        visible: false
      });
    },
    onPhoneInput(e) {
      const {
        priceError
      } = this.data;
      const isNumber = /^\d+(\.\d+)?$/.test(e.detail.value);
      if (priceError === isNumber) {
        this.setData({
          priceError: !isNumber,
        });
      }
      this.setData({
        money: e.detail.value
      });
    },
    confirmDialog() {
      if (!Number(this.data.money)) {
        Message.warning({
          context: this,
          offset: [90, 32],
          duration: 5000,
          content: '请输入提现金额',
        });
      } else {
        wechat_authentication_api_wechatwithdrawal_withdrawal_post({
          data: {
            withdrawal_money: this.data.money
          }
        }).then(result => {
          if (result.data.code === 1) {
            Message.success({
              context: this,
              offset: [90, 32],
              duration: 5000,
              content: '提现成功，请在提现记录中查看进度',
            });
            this.closeDialog()
            this.triggerEvent("reload")
          } else {
            Message.error({
              context: this,
              offset: [90, 32],
              duration: 5000,
              content: result.data.msg || '提现失败，请重新尝试',
            });
          }
        }).catch(() => {
          Message.error({
            context: this,
            offset: [90, 32],
            duration: 5000,
            content: '提现失败，请重新尝试',
          });
        })
      }
    },
    onWithdraw() {
      const result = getWithdrawalShare();
      if (!result) {
        Message.warning({
          context: this,
          offset: [90, 32],
          duration: 5000,
          content: '请先分享朋友圈，在进行提现',
        });
      } else {
        this.setData({
          visible: true,
          money: "0"
        })

      }
    }
  }
})
