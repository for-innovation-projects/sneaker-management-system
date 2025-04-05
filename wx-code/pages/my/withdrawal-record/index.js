// pages/my/withdrawal-record/index.js
import { wechat_authentication_api_wechatwithdrawal_withdrawal_get } from "../../../request/sneaker-service/Withdrawal"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordList: []
  },
  onLoad() {
    wechat_authentication_api_wechatwithdrawal_withdrawal_get({
      data: {
        page: 1,
        page_size: 40
      }
    }).then(result => {
      if (result.data.code === 1) {
        this.setData({
          recordList: result.data.data.map(item => {
            return {
              title: `提现${item.withdrawal_money}元 ${item.status === 1 ? '已成功' : '审核中'}`,
              status: item.status === 1 ? "success" : "process",
              desc: item.create_time
            }
          })
        })
      }
    })
  }
})
