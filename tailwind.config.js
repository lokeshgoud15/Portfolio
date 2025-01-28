module.exports = {
  purge: [],
  darkMode: 'class', 
  
  content: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
    
      animation: {
        slideDown: 'slideDown 1s ease-out'  
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },

      
      animation: {
        'fade-in': 'fadeIn 1s ease-out', 
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
