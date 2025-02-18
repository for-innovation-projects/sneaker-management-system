import {
  onShareTimeline,
  onShareAppMessage
} from '../../utils/share'
Page({
  onShareTimeline,
  onShareAppMessage,
  data: {

  },
  onShow() {
    this.getTabBar().init();
  },
})
