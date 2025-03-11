/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A148C',
        secondary: '#6A1B9A',
        accent: '#E91E63',
        dark: '#1A0033',
        neon: {
          pink: '#FF1493',
          purple: '#9400D3',
          blue: '#1E90FF',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}