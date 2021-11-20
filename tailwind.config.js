const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: "#1DA57A",
      "base-gray": "#DEDEDE"
    },
    extend: {
      spacing: {
        350: 350,
        530: 530,
      },
      maxWidth: {
        app: "1440px",
        350: 350,
      },
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  corePlugins: {
    preflight: false,
  },
};
