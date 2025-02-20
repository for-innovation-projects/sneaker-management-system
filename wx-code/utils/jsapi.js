let windowInfo = {
  screenWidth: 0,
  screenHeight: 0
}

export const getScreenInfo = () => {
  if (windowInfo.screenHeight) return windowInfo;
  const _windowInfo = wx.getWindowInfo();
  windowInfo = _windowInfo
  return windowInfo
}
