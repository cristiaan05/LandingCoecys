/** @type {import('tailwindcss').Config} */
import materialTailwind from "@material-tailwind/react/utils/withMT";

export default materialTailwind({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
