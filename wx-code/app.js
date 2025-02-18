import updateManager from './common/updateManager';

App({
  onShow() {
    updateManager();
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
});
