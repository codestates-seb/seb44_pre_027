import { createSlice } from '@reduxjs/toolkit';

interface DahamType {
  daham: string;
  legend: number;
}

const initialState: DahamType = {
  daham: '',
  legend: 0,
};

const dahamReducer = createSlice({
  name: 'dahamReducer',
  initialState,
  reducers: {
    dahamup: (state, action) => {
      return state;
    },
  },
});

export const { dahamup } = dahamReducer.actions;

export default dahamReducer;
