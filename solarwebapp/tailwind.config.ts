import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'electric-green':'#8EFFC2',
      'lightgreen':'#D4FAE5',
      'darkblue':'#031141',
      'lightblue':'#EEF1FC',
      'darkgrey':'#52525b',
      'lightgrey':'#d1d5db',
      'white':'#ffffff',
      'black':'#030712'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
