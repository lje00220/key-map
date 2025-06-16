import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gray: {
          '50': '#FDFDFD',
          '75': '#FAFAFA',
          '100': '#F8F8F8',
          '200': '#F3F3F3',
          '300': '#EEEEEE',
          '350': '#E0E0E0',
          '400': '#CECECE',
          '500': '#B1B1B1',
          '550': '#9C9C9C',
          '600': '#868686',
          '700': '#717171',
          '800': '#515151',
          '900': '#2F2F2F',
        },
        blue: {
          '50': '#DEF4FF',
          '75': '#C2EBFF',
          '100': '#ABE3FF',
          '200': '#6ED1FF',
          '300': '#00BFFF',
          '400': '#00B2FF',
          '500': '#00A3FE',
          '600': '#0095EF',
          '700': '#0082DA',
          '800': '#0071C6',
          '900': '#0051A3',
        },
      },
    },
  },
  plugins: [],
};
export default config;
