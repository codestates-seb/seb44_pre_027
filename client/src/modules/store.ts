import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import dahamReducer from './dahamSlice';

const store = configureStore({
  reducer: {
    daham: dahamReducer.reducer,
    login: loginSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
