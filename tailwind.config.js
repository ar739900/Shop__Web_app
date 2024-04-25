/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        'custom-blue': '#007bff',
        'custom-red': '#ff0000',
        'custom-green': '#00ff00',
      },
      fontSize: {
        '20':'20px'
      },
    },
    plugins: [],
  }
}

