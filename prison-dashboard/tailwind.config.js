/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyber theme colors
        'cyber-primary': '#00D9FF',
        'cyber-secondary': '#0099FF',
        'cyber-accent': '#00FFFF',
        'cyber-warning': '#FFD700',
        'cyber-danger': '#FF3366',
        'cyber-success': '#00FF88',
        'cyber-bg-dark': '#0A0E27',
        'cyber-bg-darker': '#050816',
        'cyber-surface': '#1A1F3A',
        'cyber-surface-light': '#252B48',
        'cyber-border': '#2A3F5F',
        'cyber-text-primary': '#FFFFFF',
        'cyber-text-secondary': '#B4C6E7',
        'cyber-text-muted': '#6B7B9E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Consolas', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'cyber': '0.25rem',
        'cyber-lg': '0.5rem',
      },
      boxShadow: {
        'cyber-glow': '0 0 20px rgba(0, 217, 255, 0.3)',
        'cyber-glow-lg': '0 0 40px rgba(0, 217, 255, 0.4)',
        'cyber-glow-danger': '0 0 20px rgba(255, 51, 102, 0.3)',
        'cyber-glow-success': '0 0 20px rgba(0, 255, 136, 0.3)',
        'cyber-panel': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 1s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)',
        'cyber-grid': 'linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
