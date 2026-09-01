'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Icon from '@/components/ui/Icon'
import { whatsappLink } from '@/lib/site'
import { EASE } from '@/lib/motion'

const MARQUEE_ITEMS = [
  'Web Apps',
  'Mobile',
  'E-commerce',
  'SaaS',
  'APIs',
  'QA Automation',
  'Landing Pages',
  'Integrações',
]

export default function Hero() {
  const t = useTranslations('hero')
  const tCommon = useTranslations()

  const stats = [
    { value: '50+', label: t('stats.projects') },
    { value: '5.0', label: t('stats.rating') },
    { value: '100%', label: t('stats.satisfaction') },
    { value: '<24h', label: t('stats.response') },
  ]

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden pt-32">
      {/* Background: dot grid + soft glows + tentacle line art */}
      <div
        className="bg-dots absolute inset-0"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 30% 40%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 30% 40%, black 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 left-[-15%] h-[500px] w-[500px] rounded-full opacity-[0.08]"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 65%)' }}
      />

      {/* Signature tentacle curves — single elegant line work */}
      <svg
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 lg:block"
        viewBox="0 0 720 900"
        fill="none"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden="true"
      >
        <motion.path
          d="M760 80 C520 120 460 320 560 460 C640 570 600 700 440 760"
          stroke="url(#hero-line-1)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut', delay: 0.4 }}
        />
        <motion.path
          d="M780 220 C580 260 540 420 620 540 C680 630 660 740 540 800"
          stroke="url(#hero-line-2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, ease: 'easeOut', delay: 0.7 }}
        />
        <defs>
          <linearGradient id="hero-line-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="hero-line-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 md:px-10">
        <div className="py-16">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-text-secondary">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
              {t('badge')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mt-8 font-display text-5xl font-bold leading-[0.98] tracking-tightest text-text-primary sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
          >
            {t('headline1')}
            <br />
            <span className="text-accent">{t('headlineAccent')}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-8 max-w-xl font-body text-lg leading-relaxed text-text-secondary md:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
          >
            {t('subheadline')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
          >
            <a
              href={whatsappLink(tCommon('whatsappMessage'))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              {t('ctaPrimary')}
            </a>
            <a href="#projetos" className="btn-secondary group">
              {t('ctaSecondary')}
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        className="relative z-10 border-t border-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:grid-cols-4 md:px-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1 py-6 md:py-8 ${
                index > 0 ? 'md:border-l md:border-line md:pl-8' : ''
              }`}
            >
              <span className="font-display text-3xl font-bold text-text-primary md:text-4xl">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-text-secondary">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Marquee */}
      <div className="relative z-10 overflow-hidden border-t border-line bg-deep-ocean/50 py-5">
        <div className="flex w-max animate-marquee gap-0">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center" aria-hidden={half === 1}>
              {MARQUEE_ITEMS.map((item) => (
                <span
                  key={`${half}-${item}`}
                  className="flex items-center gap-8 pr-8 font-display text-sm font-medium uppercase tracking-[0.2em] text-text-secondary/70"
                >
                  {item}
                  <Icon name="spark" className="h-2.5 w-2.5 text-tentacle-cyan/50" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
