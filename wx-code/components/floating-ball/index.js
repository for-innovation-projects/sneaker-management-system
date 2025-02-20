import {
  getScreenInfo
} from "../../utils/jsapi";

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
  domInfo: {
    width: 0
  },
  created() {
    const query = this.createSelectorQuery()
    query.select('.floating-ball').boundingClientRect().exec((res) => {
      this.domInfo = res[0] || {}
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTouchStart(e) {
      this.startX = e.touches[0].clientX - this.data.x
      this.startY = e.touches[0].clientY - this.data.y
    },
    onTouchMove(e) {
      let x = e.touches[0].clientX - this.startX;
      let y = e.touches[0].clientY - this.startY;
      const {
        screenHeight,
        screenWidth
      } = getScreenInfo()
      const minX = -screenWidth + (this.domInfo?.width || 0) + 30;
      const minY = -screenHeight + (this.domInfo?.height || 0) + 260;
      x = Math.min(0, Math.max(x, minX))
      y = Math.min(0, Math.max(y, minY))
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
