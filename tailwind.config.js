export default {
  content: ['./index.html', './src/**/*.{jsx, js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gelica Light', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2D3436', // Deep charcoal for main text
          light: '#636E72',
          dark: '#1E272E',
        },
        accent: {
          DEFAULT: '#00B894', // Fresh teal for accents
          light: '#55EFC4',
          dark: '#00A187',
        },
        secondary: {
          DEFAULT: '#6C5CE7', // Soft purple for secondary elements
          light: '#A29BFE',
          dark: '#5B4BC4',
        },
        background: {
          DEFAULT: '#F5F6FA', // Light gray for backgrounds
          dark: '#DFE6E9',
        },
        highlight: {
          DEFAULT: '#FF7675', // Coral for highlights
          light: '#FFA502',
          dark: '#E17055',
        }
      },
      backgroundImage: {
        github: "url('../src/assets/Linkedin.svg')",
      },
    },
  },
  plugins: [],
}
