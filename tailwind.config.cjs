/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      boxShadow: {
        custom:
        'inset 20px 10px 20px rgba(0, 0, 0, 0.1), 15px 20px 10px rgba(0, 0, 0, 0.1), 15px 20px 20px rgba(0, 0, 0, 0.1), inset -10px -10px 15px rgba(255, 255, 255, 0.6)',
        customTwo:
        'inset 10px 10px 10px rgba(0, 0, 0, 0.1), 10px 10px 10px rgba(0, 0, 0, 0.1), 15px 15px 20px rgba(0, 0, 0, 0.1), inset -10px -10px 15px rgba(255, 255, 255, 0.5)',
      },

      keyframes: {
        morph: {
          '0%': {
            borderRadius: '57% 43% 50% 63% / 45% 52% 48% 55%',
          },
          '33%': {
            borderRadius: '64% 36% 42% 50% / 42% 37% 63% 58%',
          },
          '66%': {
            borderRadius: '49% 51% 42% 58% / 56% 47% 53% 44%',
          },
          '100%': {
            borderRadius: '57% 43% 50% 63% / 45% 52% 48% 55%',
          },
        },
        morphFast: {
          '0%': {
            borderRadius: '60% 43% 50% 63% / 45% 52% 48% 55%',
          },
          '33%': {
            borderRadius: '64% 36% 52% 50% / 42% 37% 63% 58%',
          },
          '66%': {
            borderRadius: '49% 51% 52% 58% / 56% 47% 53% 44%',
          },
          '100%': {
            borderRadius: '60% 43% 50% 63% / 45% 52% 48% 55%',
          },
        },
        shock: {
          '0%': { borderRadius: '60% 43% 50% 48% / 45% 52% 48% 55%', },
          '50%': { borderRadius: '38% 34% 58% 56% / 42% 57% 63% 58%', },
          '100%': { borderRadius: '60% 43% 50% 48% / 45% 52% 48% 55%', },
        },
      },
      animation: {
        morph: 'morph 7s ease-in-out infinite',
        morphFast: 'morphFast 2.8s ease-in-out infinite',
        shock: 'shock 2s',
      },
    },
  },
  plugins: [],
};