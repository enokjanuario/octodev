'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const socialLinks = [
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/enokjrocha/' },
  { name: 'GitHub', icon: 'github', href: 'https://github.com/enokjanuario' },
]

export default function About() {
  const t = useTranslations('about')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-deep-ocean" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-octopus-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-tentacle-cyan/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            {t('title')}{' '}
            <span className="text-gradient">{t('titleHighlight')}</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Photo with Tentacle Frame */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tentacle Frame SVG */}
            <svg
              className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)]"
              viewBox="0 0 400 500"
              fill="none"
            >
              {/* Left Tentacle */}
              <motion.path
                d="M50,100 Q30,200 50,300 Q70,400 40,480"
                stroke="url(#frame-gradient)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              {/* Top Left Curl */}
              <motion.path
                d="M50,100 Q80,60 120,70"
                stroke="url(#frame-gradient)"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
              />
              {/* Right Tentacle */}
              <motion.path
                d="M350,100 Q370,200 350,300 Q330,400 360,480"
                stroke="url(#frame-gradient-2)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.6 }}
              />
              {/* Top Right Curl */}
              <motion.path
                d="M350,100 Q320,60 280,70"
                stroke="url(#frame-gradient-2)"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
              {/* Bottom Tentacle */}
              <motion.path
                d="M100,450 Q200,480 300,450"
                stroke="url(#frame-gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.9 }}
              />

              <defs>
                <linearGradient id="frame-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="frame-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Photo Container */}
            <motion.div
              className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-octopus-purple/20 to-tentacle-cyan/20 z-10 pointer-events-none" />

              <Image
                src="/founder.png"
                alt="Enok - Fundador da Octodev"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
              />

              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent z-20 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Suction Cups Animation */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-tentacle-cyan/60"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? {
                  scale: [0, 1.2, 1],
                  opacity: [0, 0.8, 0.4],
                } : {}}
                transition={{
                  delay: 1 + i * 0.1,
                  duration: 0.5,
                }}
              />
            ))}
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-6">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2">
                {t('founder')}
              </h3>
              <p className="font-body text-tentacle-cyan text-lg">
                {t('role')}
              </p>
            </div>

            <blockquote className="font-body text-xl md:text-2xl text-text-secondary italic mb-8 relative">
              <span className="absolute -left-4 -top-2 text-4xl text-octopus-purple/30">&ldquo;</span>
              {t('quote')}
              <span className="absolute -right-4 -bottom-2 text-4xl text-octopus-purple/30">&rdquo;</span>
            </blockquote>

            <p className="font-body text-text-secondary mb-8 leading-relaxed">
              {t('bio')}
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:text-tentacle-cyan transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  {link.icon === 'linkedin' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {link.icon === 'github' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}

                  {/* Bubble effect on hover */}
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-tentacle-cyan"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
