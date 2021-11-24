const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
