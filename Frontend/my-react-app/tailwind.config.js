/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'fuchsia-black': '#9d174d',
        'yellow-black': '#fbbf24',
        'coral-black': '#ff7f50',
      },
    },
  },
  
}

