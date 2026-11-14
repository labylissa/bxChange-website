/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette « warm minimal » — blanc chaud, neutres pierre, accent or.
        // (les noms de tokens sont conservés pour éviter un renommage global)
        navy: {
          // Encre chaude (titres, footer) — jamais de noir pur
          DEFAULT: '#292524',
          900: '#292524',
          800: '#37322D',
          700: '#44403B',
          600: '#57534E',
        },
        teal: {
          // Accent principal → or
          DEFAULT: '#C9A45C',
          400: '#D9BC80',
          // Or « texte » : #A8874A ne faisait que 3,37:1 sur blanc (seuil 4,5:1).
          // #85692C : 5,18 blanc, 4,92 ink-50, 4,59 ink-100.
          500: '#85692C',
        },
        mint: {
          // Accent secondaire → sauge douce (états « prêt », succès)
          DEFAULT: '#8A9A76',
          500: '#74845F',
          600: '#647252', // texte en sauge : 5,16 blanc, 4,57 ink-100 (DEFAULT ne fait que 3,02:1)
        },
        gold: {
          DEFAULT: '#C9A45C',
          600: '#85692C', // texte en or : même correction que teal-500
        },
        // Bleu officiel LinkedIn : il n'appartient pas à notre palette, il
        // appartient à la marque qu'il désigne — c'est ce qui le rend
        // reconnaissable au premier coup d'œil.
        linkedin: {
          DEFAULT: '#0A66C2',
          400: '#378FE9',
        },
        ink: {
          // Neutres pierre, chauds
          50: '#FAF9F7',
          100: '#F3F1ED',
          200: '#E7E3DC',
          300: '#D3CDC2',
          400: '#A39D92',
          // #756F64 tombait à 4,42:1 sur ink-100 ; #6B655B : 5,77 blanc, 5,12 ink-100.
          // ink-400 (2,69:1) ne sert plus au texte, seulement aux traits et icônes.
          500: '#6B655B',
          600: '#57524A',
          700: '#3D3933',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -6px rgba(41, 37, 36, 0.07)',
        'card-hover': '0 16px 48px -12px rgba(41, 37, 36, 0.14)',
      },
      backgroundImage: {
        'grid-navy':
          'linear-gradient(rgba(87,83,78,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(87,83,78,0.05) 1px, transparent 1px)',
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
