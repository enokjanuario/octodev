'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

export default function Process() {
  const t = useTranslations('process')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const steps = [
    {
      number: '01',
      title: t('steps.discovery.title'),
      description: t('steps.discovery.description'),
      icon: '🔍',
      duration: t('steps.discovery.duration'),
    },
    {
      number: '02',
      title: t('steps.proposal.title'),
      description: t('steps.proposal.description'),
      icon: '📋',
      duration: t('steps.proposal.duration'),
    },
    {
      number: '03',
      title: t('steps.development.title'),
      description: t('steps.development.description'),
      icon: '⚡',
      duration: t('steps.development.duration'),
    },
    {
      number: '04',
      title: t('steps.delivery.title'),
      description: t('steps.delivery.description'),
      icon: '🚀',
      duration: t('steps.delivery.duration'),
    },
  ]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const tentacleProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <section
      id="processo"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean via-abyss to-deep-ocean" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            {t('title')}{' '}
            <span className="text-gradient">{t('titleHighlight')}</span>{' '}
            {t('titleEnd')}
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Tentacle Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-octopus-purple/20 via-tentacle-cyan/20 to-octopus-purple/20 rounded-full" />
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-octopus-purple via-tentacle-cyan to-octopus-purple rounded-full origin-top"
              style={{ scaleY: tentacleProgress }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`relative flex items-start gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-abyss border-2 border-octopus-purple flex items-center justify-center z-10"
                    whileInView={{
                      boxShadow: [
                        '0 0 0 0 rgba(139, 92, 246, 0)',
                        '0 0 0 20px rgba(139, 92, 246, 0)',
                      ],
                    }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  >
                    <span className="text-xl">{step.icon}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pl-20 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                  }`}
                >
                  <motion.div
                    className="card-glass p-6 md:p-8"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step Number */}
                    <span className="font-mono text-sm text-tentacle-cyan mb-2 block">
                      {step.number}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold mb-3 text-text-primary">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-text-secondary mb-4">
                      {step.description}
                    </p>

                    {/* Duration Badge */}
                    <span className="inline-block font-mono text-xs px-3 py-1 rounded-full bg-octopus-purple/20 text-glow-purple border border-octopus-purple/30">
                      {step.duration}
                    </span>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>

          {/* Tentacle decoration at bottom */}
          <motion.svg
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 opacity-60"
            viewBox="0 0 80 80"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.6, scale: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <circle cx="40" cy="40" r="30" fill="url(#process-end-gradient)" />
            <defs>
              <radialGradient id="process-end-gradient">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </radialGradient>
            </defs>
          </motion.svg>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="font-body text-text-secondary mb-6">
            {t('cta.text')}
          </p>
          <motion.a
            href="#contato"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('cta.button')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
