module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Barlow"],
        text: ["Fraunces"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
