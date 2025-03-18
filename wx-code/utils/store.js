const sharekey = 'withdrawalShare';
const loginKey = 'openIdKeyStorage'
export function getWithdrawalShare() {
  const currentTime = Date.now();
  const lastTime = wx.getStorageSync(sharekey);
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
  wx.setStorageSync(sharekey, currentTime);
}
export function setOpenId(info) {
  wx.setStorageSync(loginKey, JSON.stringify(info));
}
export function getOpenId() {
  try {
    const result = wx.getStorageSync(loginKey);
    return JSON.parse(result)
  } catch (error) {
    return null
  }
}
