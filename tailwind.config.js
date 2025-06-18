module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        keyframes: {
          slideLeftFade: {
            '0%': { opacity: 0, transform: 'translateX(-50px)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
          },
          fadeOut: {
            '0%': { opacity: 1 },
            '100%': { opacity: 0 },
          }
        },
        animation: {
          slideLeftFade: 'slideLeftFade 1s ease-out forwards',
          fadeOut: 'fadeOut 1s ease-in forwards',
        },
        fontFamily: {
          unbounded: ['Unbounded', 'sans-serif'],
        },
    },
  },
  plugins: [],
  
}