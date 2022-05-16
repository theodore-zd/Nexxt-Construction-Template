const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacity (variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './page_content/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '350px',
      ...defaultTheme.screens
    },
    extend: {
      height: {
        0.7: '0.1875rem'
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite'
      },
      colors: {
        theme: {
          'main-bg': withOpacity('--main-bg'),
          'accent-bg': withOpacity('--accent-bg'),
          // eslint-disable-next-line quote-props
          'accent': withOpacity('--accent'),
          'accent-dark': withOpacity('--accent-dark'),
          'text-main': withOpacity('--text-main'),
          'text-accent': withOpacity('--text-accent'),
          'text-alt': withOpacity('--text-alt')

        }
      }
    }
  },
  plugins: []
}
