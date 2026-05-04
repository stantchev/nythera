/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B0B0C',
        'bg-secondary': '#141416',
        'accent-red': '#8B0000',
        'accent-silver': '#C0C0C0',
        'text-primary': '#EAEAEA',
        'text-secondary': '#A1A1AA',
        'border-subtle': '#1E1E21',
        'border-dim': '#2A2A2E',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      letterSpacing: {
        'widest-logo': '0.3em',
        'widest-label': '0.25em',
        'wide-section': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease forwards',
        'line-grow': 'lineGrow 1.2s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}
