import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'petrol': '#173F4F',
        'cream': '#F4E9D7',
        'gold': '#C8A86E',
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'sans-serif'],
        'serif': ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config

