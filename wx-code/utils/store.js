const key = 'withdrawalShare'
export function getWithdrawalShare() {
  const currentTime = Date.now();
  const lastTime = wx.getStorageSync(key);
  if (!lastTime) {
    return false;
  }
  const timeDiff = currentTime - lastTime;
  if (timeDiff > 86400000) {
    return false;
  }
  return true;
}
export function setWithdrawalShare() {
  const currentTime = Date.now();
  wx.setStorageSync(key, currentTime);
}