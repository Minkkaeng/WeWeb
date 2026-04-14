/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./template/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blood-coral': '#FF4D4D',
        'deep-black': '#1A1A1A',
        background: '#FFFFFF',
        foreground: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'floating': '0 20px 40px rgba(255, 77, 77, 0.1)',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        floating: 'floating 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
