// pages/order/create/index.js
import Toast from 'tdesign-miniprogram/toast/index';
import { add_products_api_wechatorder_products_post, add_products_api_wechatorder_upload_batch } from "../../../request/sneaker-service/Order"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    submitActive: false,
    egImageList: ["https://tdesign.gtimg.com/mobile/demos/image1.jpeg", "https://tdesign.gtimg.com/mobile/demos/image1.jpeg"],
    formData: {
      shopName: "",
      shopNo: "",
      desc: "",
      sizeAndNumber: [],
      originFiles: []
    },
    sizeInfo: {
      size: 36,
      number: 1
    },
    addSizeVisible: false,
    gridConfig: {
      column: 4,
      width: 160,
      height: 160,
    },
  },
  privateData: {
    verifyTip: ""
  },
  showToast(message) {
    Toast({
      context: this,
      selector: '#t-toast',
      message,
      icon: '',
      duration: 1000,
    });
  },
  onAddSizeAndNumber() {
    this.setData({
      addSizeVisible: true
    })
  },
  onVisibleChange() {
    this.setData({
      addSizeVisible: false
    })
  },
  handleSuccess(e) {
    const {
      files
    } = e.detail;
    this.setData({
      ['formData.originFiles']: files,
    });
  },
  handleRemove(e) {
    const {
      index
    } = e.detail;
    const {
      originFiles
    } = this.data.formData;
    originFiles.splice(index, 1);
    this.setData({
      ['formData.originFiles']: originFiles,
    });
  },
  onSizeInputValue(e) {
    const {
      item
    } = e.target.dataset;
    const {
      value
    } = e.detail
    this.setData({
      [`sizeInfo.${item}`]: value
    })
  },
  onFormSubmitSizeInfo() {
    const newSizeAndNumber = [...this.data.formData.sizeAndNumber];
    if (!this.data.sizeInfo.size) {
      this.showToast("请输入尺码")
      return
    }
    const size = Number(this.data.sizeInfo.size)
    if (!size || size <= 20 || size >= 60) {
      this.showToast("输入尺码不符合规则")
      return
    }
    if (newSizeAndNumber.map(item => item.size).includes(this.data.sizeInfo.size)) {
      this.showToast("尺码已存在\n请删除重新添加")
      return
    }
    newSizeAndNumber.push({
      ...this.data.sizeInfo
    })
    this.onInputValue({
      currentTarget: {
        dataset: {
          item: 'sizeAndNumber'
        }
      },
      detail: {
        value: newSizeAndNumber
      }
    })
    this.setData({
      addSizeVisible: false
    })
  },
  handleCloseTag(e) {
    const {
      index
    } = e.target.dataset;
    const newSizeAndNumber = [...this.data.formData.sizeAndNumber];
    newSizeAndNumber.splice(index, 1)
    this.setData({
      'formData.sizeAndNumber': newSizeAndNumber
    })
  },
  onInputValue(e) {
    const {
      item
    } = e.currentTarget.dataset;
    const {
      value = ''
    } = e.detail;
    this.setData({
      [`formData.${item}`]: value,
    },
      () => {
        const {
          isLegal,
          tips
        } = this.onVerifyInputLegal();
        this.setData({
          submitActive: isLegal,
        });
        this.privateData.verifyTips = tips;
      },
    );
  },
  onVerifyInputLegal() {
    const {
      shopName,
      shopNo,
      sizeAndNumber
    } = this.data.formData;
    if (!shopName || !shopName.trim()) {
      return {
        isLegal: false,
        tips: '请输入商品名',
      };
    }
    if (!shopNo || !shopNo.trim()) {
      return {
        isLegal: false,
        tips: '请填货号',
      };
    }
    if (!sizeAndNumber.length) {
      return {
        isLegal: false,
        tips: '添加尺码/数量',
      };
    }
    return {
      isLegal: true,
      tips: '',
    };
  },
  async formSubmit() {
    const {
      submitActive
    } = this.data;
    if (!submitActive) {
      this.showToast(this.privateData.verifyTips)
      return;
    }
    const { shopName, shopNo, sizeAndNumber, desc, originFiles } = this.data.formData
    let product_urls = []
    if (originFiles.length) {
      product_urls = await add_products_api_wechatorder_upload_batch(originFiles.map(item => item.url))
    }
    const res = await add_products_api_wechatorder_products_post({
      data: {
        product_name: shopName,
        product_code: shopNo,
        description: desc,
        product_infos: sizeAndNumber.map(i => ({ ...i, size: i.size.toString() })),
        product_urls: product_urls.map(item => item.data)
      }
    })
    if (res.data.code === 1) {
      wx.showModal({
        title: '添加成功',
        content: '是否继续添加',
        cancelText: "返回",
        complete: (res) => {
          if (res.cancel) {
            wx.navigateBack();
          }
          if (res.confirm) {
            this.setData({
              formData: {
                shopName: "",
                shopNo: "",
                sizeAndNumber: [],
                originFiles: []
              }
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: res.data.msg || "请稍后重试",
        icon: 'none'
      })
    }
  },
  onPreview(e) {
    const {
      item
    } = e.target.dataset
    wx.previewImage({
      urls: [item],
    })
  }
})
