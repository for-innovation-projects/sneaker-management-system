export const innerPhoneReg = new RegExp('^1(?:3\\d|4[4-9]|5[0-35-9]|6[67]|7[0-8]|8\\d|9\\d)\\d{8}$')
export const innerNameReg = new RegExp('^[a-zA-Z\\d\\u4e00-\\u9fa5]+$');
export const countDown = (time, cb) => {
  const curTime = Date.now();
  let timer = null;
  const fn = () => {
    timer = setTimeout(() => {
      const useTimer = Date.now() - curTime
      if (useTimer < time) {
        fn();
        cb(time - useTimer);
      } else {
        timer = null
        cb(0);
      }
    }, 1000)
  }
  fn();
  return () => {
    timer && clearTimeout(timer)
  }
}