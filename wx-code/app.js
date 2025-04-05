import updateManager from './common/updateManager';
import {
  getScreenInfo
} from './utils/jsapi'
import {
  getOpenId
} from './utils/store'
import { api_wechatuser_status_get } from "./request/sneaker-service/User"

App({
  onLaunch() {
    getScreenInfo();
    const result = getOpenId();
    if (!result) {
      wx.redirectTo({
        url: '/pages/sign-in/index',
      })
    } else {
      api_wechatuser_status_get({ data: {} }).then(res => {
        if (res.data.data === false) {
          wx.redirectTo({
            url: '/pages/access/index',
          })
        }
      })
    }
  },
  onShow() {
    updateManager();
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
});
