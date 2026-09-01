'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Icon, { type IconName } from '@/components/ui/Icon'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeUp, VIEWPORT } from '@/lib/motion'

type Service = {
  key: string
  icon: IconName
  tech: string[]
  featured?: boolean
}

const services: Service[] = [
  { key: 'webApps', icon: 'monitor', tech: ['React', 'Next.js', 'TypeScript'], featured: true },
  { key: 'mobile', icon: 'smartphone', tech: ['React Native', 'Expo', 'iOS/Android'] },
  { key: 'ecommerce', icon: 'shopping-bag', tech: ['Checkout', 'Payments', 'SEO'] },
  { key: 'integrations', icon: 'nodes', tech: ['REST', 'GraphQL', 'Webhooks'] },
  { key: 'qa', icon: 'flask', tech: ['Playwright', 'Robot Framework', 'CI/CD'], featured: true },
  { key: 'support', icon: 'refresh', tech: ['Monitoring', 'SLA', 'DevOps'] },
]

export default function Services() {
  const t = useTranslations('services')

  return (
    <section id="servicos" className="relative overflow-hidden border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="01"
          kicker={t('kicker')}
          title={t('title')}
          accent={t('titleAccent')}
          subtitle={t('subtitle')}
        />

        {/* Bento grid: featured cards span 2 columns on desktop */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-deep-ocean/60 p-8 transition-colors duration-500 hover:border-octopus-purple/40 ${
                service.featured ? 'lg:col-span-2' : ''
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={fadeUp}
              custom={0.06 * index}
            >
              {/* Corner glow on hover */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
              />

              <div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-line text-tentacle-cyan transition-colors duration-300 group-hover:border-tentacle-cyan/40">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-xs text-text-secondary/40">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-text-primary">
                  {t(`${service.key}.title`)}
                </h3>
                <p className="mb-8 font-body text-sm leading-relaxed text-text-secondary">
                  {t(`${service.key}.description`)}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          custom={0.2}
        >
          <a href="#contato" className="btn-secondary group">
            {t('cta')}
            <Icon
              name="arrow-up-right"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
