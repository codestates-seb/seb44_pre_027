export const getHeader = (response: Response, get: string) => {
  const header = response.headers.get(get);
  return header ? header : '';
};

export const isSuccessStatus = (response: Response) => {
  const isSuccess = response.status.toString().split('')[0];
  return isSuccess === '2' ? true : false;
};

export const setLocalStorage = (key: string, value: unknown) => {
  const stringfyValue = JSON.stringify(value);
  localStorage[key] = stringfyValue;
};

export const getLocalStorage = <T>(key: string, initialValue: T): T => {
  const getItem = localStorage.getItem(key);
  return getItem === null ? initialValue : JSON.parse(getItem);
};

export const utils = {
  getHeader,
  isSuccessStatus,
  setLocalStorage,
  getLocalStorage,
};
