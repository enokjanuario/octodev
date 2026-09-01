'use client'

import { motion } from 'framer-motion'
import { fadeUp, VIEWPORT } from '@/lib/motion'

type SectionHeaderProps = {
  index: string
  kicker: string
  title: string
  accent: string
  subtitle?: string
}

export default function SectionHeader({ index, kicker, title, accent, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-16 max-w-3xl md:mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeUp}
    >
      <div className="mb-6 flex items-center gap-4">
        <span className="kicker">
          {index} / {kicker}
        </span>
        <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-tentacle-cyan/40 to-transparent" />
      </div>
      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-text-primary md:text-6xl">
        {title} <span className="text-accent">{accent}</span>
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-xl font-body text-lg text-text-secondary">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
