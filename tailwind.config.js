/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { "box-shadow": "0 0 0 #D7D1C9" },
          "50%": { "box-shadow": "0 0 15px #D7D1C9" },
        },
      },
      animation: {
        blink: "blink 2.5s infinite",
      },
      screens: {
        // Add custom screens with max-width
        "max-2xl": { max: "1535px" },
        "max-xl": { max: "1279px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
        "max-xsm": { max: "423px" },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      brightness: {
        80: ".8",
      },
      width: {
        910: "90%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
