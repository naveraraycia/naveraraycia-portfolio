/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      colors: {
        "light-base-100": '#F0FFFA'
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#9510D4",
          "secondary": "#FF6C98",
          "accent": "#98F1FF",
          "neutral": "#41174C",
          "base-100": "#282834",
        }
      }
    ]
  }
}