import {
  setWithdrawalShare
} from "./store"

export function onShareTimeline() {
  setWithdrawalShare()
  return {
    userName: '小程序原始id',
    path: 'pages/index/index',
    title: '标题',
  }
}
export function onShareAppMessage() {
  return {
    userName: '小程序原始id',
    path: 'pages/index/index',
    title: '标题',
  }
}