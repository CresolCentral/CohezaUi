/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xxs: 12,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      'input-bg': '#202024',
      label: '#E1E1E6',

      default: {
        '900': '#121214',
        '800': '#202024',
        '700': '#374151',
        '600': '#52525B',
        '400': '#7C7C8A',
        '200': '#C4C4CC',
        '100': '#E1E1E6',
        'hover': '#2D3644',
        'disabled': '#aaa',
        'background': '#1c1c1c',
        'color': '#bdbdbd',
      },
      primary: {
        'contrast': '#e0e0e0',
        'disabled': '#aaa',
        'hover': '#094132',
        '900': '#064E3B',
        '800': '#1E4620',
        '700': '#047857',
        '400': '#15803d'
      },
      secondary: {
        'contrast': '#e0e0e0',
        'hover': '#854D0E',
        'disabled': '#aaa',
        '700': '#A16207',
        '600': '#ca8a04'
      },
      success: {
        background: 'rgb(12, 19, 13)',
        color: 'rgb(204, 232, 205)',
      },
      danger: {
        background: 'rgb(22, 11, 11)',
        color: 'rgb(244, 199, 199)',
      },
      info: {
        background: 'rgb(7, 19, 24)',
        color: 'rgb(184, 231, 251)',
      },
      warning: {
        background: 'rgb(25, 18, 7)',
        color: 'rgb(255, 226, 183)',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
