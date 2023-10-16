import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
        pop: 'var(--font-poppins)',
      },

      colors: {
        background: '#e0e0e0',
        primary: '#7c73e6',
        nav: '#e3e3e3',
        title: '#52525b',
      },
    },
  },
  plugins: [],
}
export default config
