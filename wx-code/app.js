import updateManager from './common/updateManager';

App({
  onShow() {
    updateManager();
  },
});
