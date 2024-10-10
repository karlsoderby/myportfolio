module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This ensures that Tailwind scans your files for class names
  ],
  theme: {
    extend: {
      fontFamily: {
        'afacad-flux': ['"Afacad Flux"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}