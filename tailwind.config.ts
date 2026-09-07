import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        page: '#09090B',
        surface: '#111111',
        border: '#2c2c2f',
        accent: '#3B82F6',
        muted: '#8f97a0',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(19, 22, 29, 0.35)',
        glow: '0 0 40px rgba(59, 130, 246, 0.18)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 34%), radial-gradient(circle at bottom right, rgba(59,130,246,0.08), transparent 28%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
