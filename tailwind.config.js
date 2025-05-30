/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7ac7fc',
          400: '#36aaf8',
          500: '#0c8ee7',
          600: '#0070c4',
          700: '#0059a0',
          800: '#064b84',
          900: '#0c406e',
          950: '#082847',
        },
        secondary: {
          50: '#f4f7fb',
          100: '#e8f0f8',
          200: '#cbe1f1',
          300: '#9cc7e5',
          400: '#65aad6',
          500: '#418cc0',
          600: '#2f70a5',
          700: '#275a86',
          800: '#244c6f',
          900: '#22415d',
          950: '#162a3d',
        },
        accent: {
          50: '#fdf2ff',
          100: '#fae4ff',
          200: '#f6c9ff',
          300: '#f2a1fe',
          400: '#eb68fc',
          500: '#df3af3',
          600: '#c518d6',
          700: '#a511af',
          800: '#87138f',
          900: '#701475',
          950: '#4d0052',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};