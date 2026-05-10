/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BCD4',
        secondary: '#1A237E',
        accent: '#FF4081',
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out both',
        'fade-in-up': 'fade-in-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in-down': 'fade-in-down 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'count-up': 'count-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'slide-in-left': 'slide-in-left 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-in-right': 'slide-in-right 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'scale-in': 'scale-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'gradient-x': 'gradient-x 6s ease infinite',
        'shine': 'shine 2.5s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
        'border-flow': 'border-flow 4s ease infinite',
        'blob': 'blob 12s infinite',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          'from': { opacity: '0', transform: 'translateY(-40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          'from': { opacity: '0', transform: 'translateX(-60px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          'from': { opacity: '0', transform: 'translateX(60px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          'from': { opacity: '0', transform: 'scale(0.85)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(2deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-12px) scale(1.04)' },
        },
        'count-up': {
          'from': { opacity: '0', transform: 'scale(0.5)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'shine': {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
        'tilt': {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(20px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(20px) rotate(-360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(6, 182, 212, 0.3)' },
          '50%': { 'box-shadow': '0 0 50px rgba(6, 182, 212, 0.7), 0 0 80px rgba(6, 182, 212, 0.4)' },
        },
        'border-flow': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'blob': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
}
