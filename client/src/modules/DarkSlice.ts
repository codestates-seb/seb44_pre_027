import { createSlice } from '@reduxjs/toolkit';

interface DarkModeState {
  isDark: boolean;
}

const initialState: DarkModeState = {
  isDark:
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
};

const darkSlice = createSlice({
  name: 'darkSlice',
  initialState,
  reducers: {
    //action: PayloadAction<string>
    toggleDarkMode: (state) => {
      const update = !state.isDark;

      if (update) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
      state.isDark = update;
    },
  },
});

export const { toggleDarkMode } = darkSlice.actions;
export default darkSlice;
