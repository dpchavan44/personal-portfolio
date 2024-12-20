module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {
      colors: {
        // Add custom colors if needed
      },
      boxShadow: {
        'white': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}