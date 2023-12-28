/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      libre : ["Libre Baskerville", "serif"],
      anon : ["Anonymous Pro", "mono space"],
      quat : ["Quattrocento Sans", "sans-serif"],
      sans : ["ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    },
  },
  daisyui: {
    themes: ["dark", "cmyk"],
  },
  plugins: [
    require("daisyui")
  ],
}

