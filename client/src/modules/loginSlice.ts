import { createSlice } from '@reduxjs/toolkit';

interface InitialStateInterface {
  isLogin: boolean;
  accesstoken: string;
  refreshtoken?: string;
}

const initialState: InitialStateInterface = {
  isLogin: false,
  accesstoken: '',
  refreshtoken: '',
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      return { ...state, isLogin: true, accesstoken: action.payload.accesstoken };
    },
    setLogout: (state, action) => {
      return { ...state, isLogin: false };
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;
export default loginSlice;
