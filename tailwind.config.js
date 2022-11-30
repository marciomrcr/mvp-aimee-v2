/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [/^bg-/, /^to-/, /^from/],

  theme: {
    extend: {
      body: {
        m: 0,
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
