/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize:{
        sxs: ['8px', {
          lineHeight: '12px'
        }],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
