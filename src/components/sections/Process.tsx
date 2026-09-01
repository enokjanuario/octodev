'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Icon, { type IconName } from '@/components/ui/Icon'
import { fadeUp, VIEWPORT } from '@/lib/motion'

const steps: { key: string; icon: IconName }[] = [
  { key: 'discovery', icon: 'search' },
  { key: 'proposal', icon: 'file-text' },
  { key: 'development', icon: 'code' },
  { key: 'delivery', icon: 'upload-cloud' },
]

export default function Process() {
  const t = useTranslations('process')

  return (
    <section id="processo" className="relative overflow-hidden border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Sticky intro */}
          <div>
            <motion.div
              className="lg:sticky lg:top-28"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={fadeUp}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="kicker">03 / {t('kicker')}</span>
                <span className="h-px max-w-24 flex-1 bg-gradient-to-r from-tentacle-cyan/40 to-transparent" />
              </div>
              <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-text-primary md:text-6xl">
                {t('title')} <span className="text-accent">{t('titleAccent')}</span>
              </h2>
              <p className="mt-5 max-w-md font-body text-lg text-text-secondary">
                {t('subtitle')}
              </p>
              <div className="mt-10 hidden lg:block">
                <p className="mb-4 font-body text-sm text-text-secondary">{t('cta.text')}</p>
                <a href="#contato" className="btn-secondary group">
                  {t('cta.button')}
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Steps */}
          <div className="border-t border-line">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                className="group grid grid-cols-[auto_1fr] gap-6 border-b border-line py-10 md:gap-10 md:py-12"
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                variants={fadeUp}
                custom={0.08 * index}
              >
                <span className="font-display text-5xl font-bold leading-none text-text-secondary/15 transition-colors duration-500 group-hover:text-tentacle-cyan/30 md:text-7xl">
                  0{index + 1}
                </span>
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-tentacle-cyan">
                      <Icon name={step.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-text-primary">
                      {t(`steps.${step.key}.title`)}
                    </h3>
                    <span className="rounded-full border border-octopus-purple/30 px-3 py-1 font-mono text-[11px] text-glow-purple">
                      {t(`steps.${step.key}.duration`)}
                    </span>
                  </div>
                  <p className="max-w-lg font-body text-text-secondary">
                    {t(`steps.${step.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Mobile CTA */}
            <div className="mt-10 lg:hidden">
              <p className="mb-4 font-body text-sm text-text-secondary">{t('cta.text')}</p>
              <a href="#contato" className="btn-secondary group">
                {t('cta.button')}
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
