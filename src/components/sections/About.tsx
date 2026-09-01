'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Icon from '@/components/ui/Icon'
import { fadeUp, VIEWPORT, EASE } from '@/lib/motion'
import { SOCIAL } from '@/lib/site'

export default function About() {
  const t = useTranslations('about')

  const facts = [
    t('facts.experience'),
    t('facts.degree'),
    t('facts.specialty'),
  ]

  return (
    <section id="sobre" className="relative overflow-hidden border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          {/* Photo */}
          <motion.div
            className="relative mx-auto w-full max-w-sm lg:mx-0"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {/* Offset frame */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-xl border border-octopus-purple/30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line">
              <Image
                src="/founder.png"
                alt={t('founder')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 384px, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/60 via-transparent to-transparent" />
            </div>
            {/* Name plate */}
            <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-line bg-abyss/80 px-5 py-4 backdrop-blur-md">
              <p className="font-display text-lg font-semibold text-text-primary">
                {t('founder')}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-tentacle-cyan">
                {t('role')}
              </p>
            </div>
          </motion.div>

          {/* Info */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={fadeUp}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="kicker">04 / {t('kicker')}</span>
                <span className="h-px max-w-24 flex-1 bg-gradient-to-r from-tentacle-cyan/40 to-transparent" />
              </div>
              <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-text-primary md:text-5xl">
                {t('title')} <span className="text-accent">{t('titleAccent')}</span>
              </h2>
            </motion.div>

            <motion.blockquote
              className="mt-8 border-l-2 border-tentacle-cyan/60 pl-6 font-display text-xl font-medium italic text-text-primary md:text-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={fadeUp}
              custom={0.1}
            >
              &ldquo;{t('quote')}&rdquo;
            </motion.blockquote>

            <motion.p
              className="mt-6 max-w-xl font-body text-lg leading-relaxed text-text-secondary"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={fadeUp}
              custom={0.15}
            >
              {t('bio')}
            </motion.p>

            {/* Facts */}
            <motion.ul
              className="mt-8 flex flex-col gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={fadeUp}
              custom={0.2}
            >
              {facts.map((fact) => (
                <li key={fact} className="flex items-center gap-3 font-body text-text-secondary">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-tentacle-cyan" />
                  {fact}
                </li>
              ))}
            </motion.ul>

            {/* Social */}
            <motion.div
              className="mt-10 flex gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={fadeUp}
              custom={0.25}
            >
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-text-secondary transition-colors hover:border-tentacle-cyan/50 hover:text-tentacle-cyan"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-text-secondary transition-colors hover:border-tentacle-cyan/50 hover:text-tentacle-cyan"
                aria-label="GitHub"
              >
                <Icon name="github" className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
