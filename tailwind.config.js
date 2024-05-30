/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        lg: "6rem",
      },
    },
    extend: {
      colors: {
        primary: "rgb(243,239,236)",
        "on-primary": "#D58A94",
        secondary: "rgb(237,209,199)",
        "accent-yellow": "rgb(238,228,169)",
        "accent-white": "rgb(245,245,245)",
        "accent-blue": "rgb(159,190,211)",
        "accent-lilac": "rgb(197,284,107)"
      },
      keyframes: {
        "text-slide": {
          "0%, 16%": {
            transform: "translateY(0%)",
          },
          "20%, 36%": {
            transform: "translateY(-16.66%)",
          },
          "40%, 56%": {
            transform: "translateY(-33.33%)",
          },
          "60%, 76%": {
            transform: "translateY(-50%)",
          },
          "80%, 96%": {
            transform: "translateY(-66.66%)",
          },
          "100%": {
            transform: "translateY(-83.33%)",
          },
        },
      },
      animation: {
        "text-slide":
          "text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
    },
  },
  plugins: [],
}

