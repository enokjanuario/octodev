import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-ocean': '#0a0f1c',
        'abyss': '#060a14',
        'surface': '#0c1322',
        'octopus-purple': '#8b5cf6',
        'tentacle-cyan': '#06b6d4',
        'glow-purple': '#a78bfa',
        'glow-cyan': '#22d3ee',
        'electric-blue': '#3b82f6',
        'text-primary': '#f8fafc',
        'text-secondary': '#94a3b8',
        'line': 'rgba(148, 163, 184, 0.12)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
export default config
