import updateManager from './common/updateManager';
import {
  getScreenInfo
} from './utils/jsapi'
import {
  getOpenId
} from './utils/store'

App({
  onLaunch() {
    getScreenInfo();
    const result = getOpenId();
    if (!result) {
      wx.redirectTo({
        url: '/pages/sign-in/index',
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
