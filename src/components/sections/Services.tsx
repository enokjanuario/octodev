'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

const tentacleDirections = [
  { startX: -200, startY: 0 },
  { startX: 200, startY: 0 },
  { startX: -200, startY: 0 },
  { startX: 200, startY: 0 },
  { startX: 0, startY: 200 },
  { startX: 0, startY: 200 },
]

export default function Services() {
  const t = useTranslations('services')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const services = [
    {
      icon: '🌐',
      title: t('webApps.title'),
      description: t('webApps.description'),
      tech: ['React', 'Next.js', 'Node.js'],
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: '📱',
      title: t('mobile.title'),
      description: t('mobile.description'),
      tech: ['React Native', 'Flutter', 'iOS/Android'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: '🛒',
      title: t('ecommerce.title'),
      description: t('ecommerce.description'),
      tech: ['Shopify', 'WooCommerce', 'Custom'],
      gradient: 'from-green-500 to-cyan-500',
    },
    {
      icon: '🔗',
      title: t('integrations.title'),
      description: t('integrations.description'),
      tech: ['REST', 'GraphQL', 'Webhooks'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: '💡',
      title: t('consulting.title'),
      description: t('consulting.description'),
      tech: ['Architecture', 'Code Review', 'Mentoring'],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: '🛠️',
      title: t('support.title'),
      description: t('support.description'),
      tech: ['24/7', 'SLA', 'Monitoring'],
      gradient: 'from-pink-500 to-purple-500',
    },
  ]

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-deep-ocean" />

      <svg className="absolute left-0 top-1/4 w-32 md:w-48 h-auto opacity-30" viewBox="0 0 200 400">
        <motion.path
          d="M0,200 Q50,180 80,220 Q110,260 90,320 Q70,380 120,400"
          fill="none"
          stroke="url(#service-tentacle)"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <defs>
          <linearGradient id="service-tentacle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      <svg className="absolute right-0 top-1/3 w-32 md:w-48 h-auto opacity-30" viewBox="0 0 200 400">
        <motion.path
          d="M200,200 Q150,180 120,220 Q90,260 110,320 Q130,380 80,400"
          fill="none"
          stroke="url(#service-tentacle)"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2, delay: 0.7 }}
        />
      </svg>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group"
              initial={{
                opacity: 0,
                x: tentacleDirections[index].startX,
                y: tentacleDirections[index].startY,
              }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{
                delay: 0.3 + index * 0.15,
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
              }}
            >
              <motion.div
                className="card-glass h-full p-8 relative overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-tentacle-cyan opacity-0 group-hover:opacity-60 transition-all duration-300 blur-sm" />
                <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-octopus-purple opacity-0 group-hover:opacity-60 transition-all duration-300 blur-sm" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-octopus-purple opacity-0 group-hover:opacity-60 transition-all duration-300 blur-sm" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-tentacle-cyan opacity-0 group-hover:opacity-60 transition-all duration-300 blur-sm" />

                <div className="relative z-10">
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-text-primary group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-text-secondary text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 text-text-secondary border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.a
            href="#contato"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('cta')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
