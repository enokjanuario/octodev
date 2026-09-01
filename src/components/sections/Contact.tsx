'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Icon from '@/components/ui/Icon'
import { whatsappLink, EMAIL } from '@/lib/site'
import { fadeUp, VIEWPORT, EASE } from '@/lib/motion'

export default function Contact() {
  const t = useTranslations('contact')
  const tCommon = useTranslations()

  const bullets = [
    t('bullets.freeQuote'),
    t('bullets.response'),
    t('bullets.satisfaction'),
  ]

  return (
    <section id="contato" className="relative overflow-hidden border-t border-line py-32 md:py-44">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.15]"
        style={{
          background:
            'radial-gradient(ellipse, rgba(139,92,246,0.5) 0%, rgba(6,182,212,0.2) 45%, transparent 70%)',
        }}
      />
      <div
        className="bg-dots absolute inset-0"
        style={{
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
        {/* Availability */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-text-secondary">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
            {t('availability')}
          </span>
        </motion.div>

        {/* Big statement */}
        <motion.h2
          className="mt-8 font-display text-5xl font-bold leading-[1.02] tracking-tightest text-text-primary md:text-7xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {t('title')} <span className="text-accent">{t('titleAccent')}</span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-xl font-body text-lg text-text-secondary"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          custom={0.15}
        >
          {t('subtitle')}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          custom={0.25}
        >
          <a
            href={whatsappLink(tCommon('whatsappMessage'))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-5 text-lg"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            {t('ctaPrimary')}
          </a>
          <p className="font-body text-sm text-text-secondary">
            {t('ctaEmail')}{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="link-underline font-mono text-tentacle-cyan"
            >
              {EMAIL}
            </a>
          </p>
        </motion.div>

        {/* Trust bullets */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          custom={0.35}
        >
          {bullets.map((bullet) => (
            <span
              key={bullet}
              className="flex items-center gap-2 font-body text-sm text-text-secondary"
            >
              <Icon name="check" className="h-4 w-4 text-tentacle-cyan" />
              {bullet}
            </span>
          ))}
        </motion.div>

        {/* Guarantee */}
        <motion.div
          className="mx-auto mt-12 max-w-md rounded-xl border border-line bg-deep-ocean/60 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          custom={0.45}
        >
          <div className="mb-2 flex items-center justify-center gap-2">
            <Icon name="shield-check" className="h-5 w-5 text-tentacle-cyan" />
            <span className="font-display font-semibold text-text-primary">
              {t('guarantee.title')}
            </span>
          </div>
          <p className="font-body text-sm text-text-secondary">
            {t('guarantee.description')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
