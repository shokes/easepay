/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.28px' }],
        sm: ['14px', { lineHeight: '24px', letterSpacing: '-0.42px' }],
        base: ['15px', { lineHeight: '24px', letterSpacing: '-0.45px' }],
        lg: ['18px', { lineHeight: '32px', letterSpacing: '-0.36px' }],
        xl: ['59px', { lineHeight: '80px', letterSpacing: '-1.28px' }],

        '2xl': ['95px', { lineHeight: '104px', letterSpacing: '-1.92px' }],
      },
    },
  },
  plugins: [],
};

// h1 2xl 95
// h2 xl 59
// h3 lg 18
// h4 base 15
// h5 sm 14
// p xs 14
