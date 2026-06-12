/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050d1a',
          900: '#0a1628',
          800: '#0f2140',
          700: '#152d54',
          600: '#1c3a6b',
        },
        gold: {
          300: '#f5e6b8',
          400: '#e8c872',
          500: '#d4af37',
          600: '#b8942e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(212, 175, 55, 0.35)',
        'glow-lg': '0 0 60px rgba(37, 211, 102, 0.45)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.37)',
        card: '0 20px 60px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, rgba(5,13,26,0.92) 0%, rgba(10,22,40,0.78) 45%, rgba(15,33,64,0.55) 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' },
        },
      },
    },
  },
  plugins: [],
}
