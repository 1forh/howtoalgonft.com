module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#FFFFFE',
            a: {
              color: '#87EFAC',
            },
            h1: {
              color: '#FFFFFE',
              fontSize: '24px',
              fontWeight: 'bold',
            },
            img: {
              borderRadius: '5px',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
