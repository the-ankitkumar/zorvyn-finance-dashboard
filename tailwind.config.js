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
          DEFAULT: '#ffffff',
          dark: '#0d0d1a',
        },
        sidebar: {
          DEFAULT: '#f8fafc',
          dark: '#12122a',
        },
        card: {
          DEFAULT: '#ffffff',
          dark: '#1a1a35',
        },
        primary: {
          DEFAULT: '#7c3aed',
          hover: '#6d28d9',
        },
        income: '#10b981',
        expense: '#ef4444',
        text: {
          primary: {
            DEFAULT: '#0f172a',
            dark: '#ffffff',
          },
          secondary: {
            DEFAULT: '#64748b',
            dark: '#94a3b8',
          }
        },
        border: {
          DEFAULT: '#e2e8f0',
          dark: '#2a2d45', // from exact requirement "cards with subtle dark borders"
        }
      },
    },
  },
  plugins: [],
}
