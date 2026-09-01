'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Icon from '@/components/ui/Icon'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeUp, VIEWPORT, EASE } from '@/lib/motion'

export default function Problems() {
  const t = useTranslations('problems')

  const problems = [
    { key: 'delays', icon: 'clock' as const },
    { key: 'bugs', icon: 'flask' as const },
    { key: 'costs', icon: 'zap' as const },
  ]

  return (
    <section id="problemas" className="relative overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="00"
          kicker={t('kicker')}
          title={t('title')}
          accent={t('titleAccent')}
        />

        {/* Problem rows */}
        <div className="border-t border-line">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.key}
              className="group grid grid-cols-1 gap-4 border-b border-line py-8 md:grid-cols-[80px_1fr_2fr] md:items-baseline md:gap-8 md:py-10"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={fadeUp}
              custom={index * 0.1}
            >
              <span className="font-mono text-sm text-text-secondary/50">
                0{index + 1}
              </span>
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-octopus-purple transition-colors duration-300 group-hover:border-octopus-purple/40">
                  <Icon name={problem.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-semibold text-text-primary md:text-2xl">
                  {t(`${problem.key}.title`)}
                </h3>
              </div>
              <p className="font-body text-base text-text-secondary md:text-lg">
                {t(`${problem.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution statement */}
        <motion.div
          className="mt-20 md:mt-28"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="max-w-4xl border-l-2 border-tentacle-cyan/60 pl-8 md:pl-12">
            <p className="font-display text-3xl font-bold leading-tight tracking-tightest text-text-primary md:text-5xl">
              {t('solution.statement')}
            </p>
            <p className="mt-6 max-w-2xl font-body text-lg text-text-secondary">
              {t('solution.description')}
            </p>
            <a
              href="#processo"
              className="group mt-8 inline-flex items-center gap-2 font-display font-semibold text-tentacle-cyan transition-colors hover:text-glow-cyan"
            >
              {t('solution.cta')}
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
