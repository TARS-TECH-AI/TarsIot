export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      colors: {
        cyan: { 400: '#22d3ee', 500: '#06b6d4' },
        teal: { 400: '#2dd4bf' },
        navy: { 900: '#0a0f1e', 800: '#0d1526' },
      },
    },
  },
  plugins: [],
};