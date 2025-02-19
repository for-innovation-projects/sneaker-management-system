// components/floating-ball/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    x: 0,
    y: 0,
  },
  startX: 0,
  startY: 0,
  /**
   * 组件的方法列表
   */
  methods: {
    onTouchStart: function (e) {
      this.startX = e.touches[0].clientX - this.data.x
      this.startY = e.touches[0].clientY - this.data.y
    },
    onTouchMove: function (e) {
      let x = e.touches[0].clientX - this.startX;
      let y = e.touches[0].clientY - this.startY;
      this.setData({
        x,
        y
      });
    },
    onTouchEnd: function () {
      // 可以在这里添加松手后的逻辑，比如吸附到边缘等
    }
  }
})
