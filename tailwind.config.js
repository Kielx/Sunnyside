module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Barlow"],
        text: ["Fraunces"],
      },
      colors: {
        display: {
          softRed: "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          darkDesaturatedCyan: "hsl(167, 40%, 24%)",
          darkBlue: "hsl(198, 62%, 26%)",
          darkModerateCyan: "hsl(168, 34%, 41%)",
          veryDarkDesaturatedblue: "hsl(212, 27%, 19%)",
          veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
          darkgrayishBlue: "hsl(232, 10%, 55%)",
          grayishBlue: "hsl(210, 4%, 67%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
