module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
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
              fontWeight: 500,
              color: '#87EFAC',
            },
            strong: {
              color: '#FFFFFE',
            },
            h1: {
              color: '#FFFFFE',
              fontSize: '22px',
              lineHeight: '1.4',
              fontWeight: 700,
            },
            h2: {
              color: '#a3a3a3',
              fontSize: '20px',
              fontWeight: 700,
            },
            h3: {
              color: '#a3a3a3',
              fontSize: '18px',
              fontWeight: 700,
            },
            h4: {
              color: '#a3a3a3',
              fontSize: '16px',
              fontWeight: 700,
            },
            img: {
              borderRadius: '8px',
            },
            code: {
              color: '#FFFFFE',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
