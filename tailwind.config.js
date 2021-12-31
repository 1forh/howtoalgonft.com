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
            h2: {
              color: '#FFFFFE',
              fontSize: '20px',
              fontWeight: 'bold',
            },
            h3: {
              color: '#FFFFFE',
              fontSize: '18px',
              fontWeight: 'bold',
            },
            h4: {
              color: '#FFFFFE',
              fontSize: '16px',
              fontWeight: 'bold',
            },
            img: {
              borderRadius: '8px',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
