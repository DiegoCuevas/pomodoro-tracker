module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      white: "-7px -6px 20px -8px rgba(255,255,255,0.94);",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
