/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0f1117',
          light: '#ffffff',
        },
        surface: {
          DEFAULT: '#1a1d27',
          light: '#f5f5f5',
        },
        primary: '#0f62fe',
        secondary: '#42be65',
        textPrimary: {
          DEFAULT: '#f4f4f4',
          light: '#1a1d27',
        },
        textSecondary: {
          DEFAULT: '#a8b3cf',
          light: '#6b7280',
        },
        border: {
          DEFAULT: '#2a2d3e',
          light: '#e5e7eb',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


