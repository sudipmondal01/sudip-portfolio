/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./index.tsx",
    "./src/**/*.{html,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#C6A96B",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "mono-tech": ["Space Grotesk", "monospace"],
        "serif-italic": ["Playfair Display", "serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'progress-bar': 'progressBar 7s linear forwards',
        'cinematic-zoom': 'cinematicZoom 8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        progressBar: {
          '0%': { width: '0%', opacity: '0' },
          '5%': { opacity: '1' },
          '100%': { width: '100%', opacity: '1' }
        },
        cinematicZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' }
        }
      }
    }
  },
  plugins: [],
  // Performance optimizations
  corePlugins: {
    preflight: true,
  },
  blocklist: ['container'], // Remove unused container utility
};