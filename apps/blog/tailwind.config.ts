import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--fill-primary)',
        secondary: 'var(--fill-secondary)',
      },
      textColor: {
        primary: 'var(--fill-primary)',
        secondary: 'var(--fill-secondary)',
      },
    },
  },
  plugins: [],
};
export default config;
