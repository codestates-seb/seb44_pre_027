import { getLocalStorage, setLocalStorage, utils } from '../utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginType {
  accesstoken: string;
  refreshtoken: string;
}

interface InitialStateInterface extends LoginType {
  isLogin: boolean;
}

const LOGINKEY = 'login';

const initialState: InitialStateInterface = getLocalStorage(LOGINKEY, {
  isLogin: false,
  accesstoken: '',
  refreshtoken: '',
});

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<LoginType>) => {
      const loginData = {
        isLogin: true,
        accesstoken: action.payload.accesstoken,
        refreshtoken: action.payload.refreshtoken,
      };
      setLocalStorage(LOGINKEY, loginData);
      return loginData;
    },
    setLogout: (state) => {
      const logoutData = { ...state, isLogin: false, accesstoken: '' };
      setLocalStorage(LOGINKEY, logoutData);
      return logoutData;
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;
export default loginSlice;
