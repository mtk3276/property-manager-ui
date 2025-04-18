/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F3460',
          light: '#285A9A',
          dark: '#0A2540',
        },
        secondary: {
          DEFAULT: '#2E8BC0',
          light: '#5AAFDD',
          dark: '#1C5D80',
        },
        accent: {
          DEFAULT: '#FFB830',
          light: '#FFCF73',
          dark: '#E09A00',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
        }
      },
    },
  },
  plugins: [],
};