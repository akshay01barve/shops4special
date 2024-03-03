/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT( {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
 

  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
});