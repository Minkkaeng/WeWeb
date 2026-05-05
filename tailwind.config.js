/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./template/**/*.{js,ts,jsx,tsx}",
    "../Monorepo/packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blood-coral': '#FF4D4D',
        'deep-black': '#1A1A1A',
        background: '#FFFFFF',
        foreground: '#1A1A1A',
        indigo: {
          50: '#f6f7f6',
          100: '#eaeeea',
          200: '#d7e2d7',
          300: '#bccbb8',
          400: '#a3b49e',
          500: '#8f9b8a',
          600: '#758371',
          700: '#5e6a5b',
          800: '#485244',
          900: '#343b31'
        }
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
