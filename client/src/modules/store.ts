import { configureStore } from '@reduxjs/toolkit';
import dahamReducer from './dahamReducer';
import darkSlice from './DarkSlice';

const store = configureStore({
  reducer: {
    dark: darkSlice.reducer,
    daham: dahamReducer.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
