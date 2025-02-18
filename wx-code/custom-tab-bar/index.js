import TabMenu from './data';
Component({
  data: {
    active: 0,
    list: TabMenu,
  },

  methods: {
    onChange(event) {
      this.setData({
        active: event.detail.value
      });
      wx.switchTab({
        url: `/${this.data.list[event.detail.value].pagePath}`,
      });
    },

    init() {
      const page = getCurrentPages().pop();
      const route = page ? page.route.split('?')[0] : '';
      const active = this.data.list.findIndex(
        (item) => item.pagePath === route,
      );
      this.setData({
        active
      });
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
    },
  },
});
