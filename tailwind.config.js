module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
          green: "rgb(145 211 196)",
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
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover"],
      borderRadius: ["hover"],
      padding: ["hover"],
      textTransform: ["hover"],
    },
  },
  plugins: [],
};
