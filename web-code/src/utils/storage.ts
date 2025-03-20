const loginKey = 'usekey';
export const setJWT = (result: string) => {
  sessionStorage.setItem(loginKey, result);
};
export const getJWT = () => {
  const resullt = sessionStorage.getItem(loginKey);
  return resullt;
};
