/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
      colors: {
        "theme-blue": "#1364F1",
        "theme-dark-blue": "#0648EF",
        "links-blue": "#2B84EA",
        "faded-text-grey": "#5F6C7D",
        "gradient-start": "#FFFFFF",
        "gradient-mid": "#F1F5FE",
        "gradient-end": "#FEFEFE",
        "grey-background": "#f2f4f8",
        "website-green": "#01B256",
        "website-grey": "#F2F4F8",
      },
      backgroundImage: { "hero-bg": "url('./media/bg.svg')" },
      plugins: [],
    },
  },
};
