/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — see bxchange-site-brief.md §3
        navy: {
          DEFAULT: '#0A1628',
          900: '#0A1628',
          800: '#0F1E36',
          700: '#16294A',
          600: '#1E3560',
        },
        teal: {
          DEFAULT: '#2DD4E8', // accent primaire
          400: '#2DD4E8',
          500: '#1BB9CE',
        },
        mint: {
          DEFAULT: '#1EC9A3', // teal secondaire
          500: '#1EC9A3',
        },
        gold: {
          DEFAULT: '#C9A45C', // accent premium — parcimonie
        },
        ink: {
          50: '#F6F8FB',
          100: '#EEF2F7',
          200: '#DCE3EC',
          300: '#B9C4D2',
          400: '#8593A6',
          500: '#5C6B80',
          600: '#3E4B5E',
          700: '#2A3547',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -6px rgba(10, 22, 40, 0.10)',
        'card-hover': '0 12px 40px -8px rgba(10, 22, 40, 0.18)',
      },
      backgroundImage: {
        'grid-navy':
          'linear-gradient(rgba(45,212,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,232,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.06)' },
        },
        dash: {
          to: { strokeDashoffset: '-24' },
        },
        travel: {
          '0%': { left: '0%', opacity: '0' },
          '10%, 90%': { opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'spin-slow': 'spin-slow 14s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 7s ease-in-out infinite',
        dash: 'dash 1s linear infinite',
        travel: 'travel 3.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
