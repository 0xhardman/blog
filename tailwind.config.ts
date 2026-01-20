/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			accent: {
  				DEFAULT: 'var(--accent)',
  				dim: 'var(--accent-dim)',
  				glow: 'var(--accent-glow)',
  			},
  			'accent-secondary': {
  				DEFAULT: 'var(--accent-secondary)',
  				glow: 'var(--accent-secondary-glow)',
  			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      fontFamily: {
        vt323: ['var(--font-vt323)'],
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px var(--accent-glow)',
        'glow-secondary': '0 0 20px var(--accent-secondary-glow)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      },
  	},
  	animation: {
  		scroll: 'scroll 180s linear infinite',
  		pause: 'pause 0s 1'
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
