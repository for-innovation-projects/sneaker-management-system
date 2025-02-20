import updateManager from './common/updateManager';

import {
  getScreenInfo
} from './utils/jsapi'
App({
  onLaunch() {
    getScreenInfo();
  },
  onShow() {
    updateManager();
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
});
