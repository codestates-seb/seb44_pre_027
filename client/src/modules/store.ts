import { configureStore } from '@reduxjs/toolkit';
import darkSlice from './darkSlice';
import dahamReducer from './dahamSlice';

const store = configureStore({
  reducer: {
    dark: darkSlice.reducer,
    daham: dahamReducer.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
