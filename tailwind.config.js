/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: "#062C20",
          emerald: "#003B2B",
          dark: "#021C15",
          cream: "#FFF0D6",
          beige: "#F5E5C7",
          gold: "#F5BD54",
          antiquegold: "#C69A43",
          chocolate: "#63351E",
          text: "#17291F",
          cardDark: "#042017",
          borderGreen: "#0e4333",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        handwritten: ['"Caveat"', 'cursive'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(245, 189, 84, 0.15) 0%, transparent 70%)',
        'emerald-gradient': 'linear-gradient(135deg, #021C15 0%, #062C20 50%, #003B2B 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FFF0D6 0%, #FDF7EC 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.9, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}

