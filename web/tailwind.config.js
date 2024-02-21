/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // eslint-disable-next-line no-undef
  presets: [require('./src/common/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
