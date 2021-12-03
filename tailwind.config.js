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
      secondary:"#F2FFFB",
      "base-gray": "#DEDEDE",
    },
    extend: {
      spacing: {
        350: 350,
        530: 530,
        "1/12": "8.3%",
        "1/10": "10%",
      },
      maxWidth: {
        app: "1440px",
        350: 350,
        "1/3": "33.33%",
      },
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        app: "auto 1fr",
      },
      boxShadow: {
        app: " 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12),0 5px 12px 4px rgba(0, 0, 0, 0.09)",
        app1: " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"
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
