/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize:{
        sxs: ['8px', {
          lineHeight: '12px'
        }],
        13: ['13px', {
          lineHeight: '19px'
        }],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
