export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
    "./index1.html"

  ],
  theme: {
    extend: {
      backgroundImage: {
        'flutter': "url('./src/images/flutter.jpg')",
      },
    },
  },
  plugins: [],
}