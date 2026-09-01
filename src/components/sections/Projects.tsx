'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Icon from '@/components/ui/Icon'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeUp, VIEWPORT, EASE } from '@/lib/motion'

const projects = [
  {
    key: 'academiay',
    title: 'Academia Y',
    link: 'http://academia-y.com.br/',
    image: '/projects/Screenshot_1.png',
    tech: ['React', 'Node.js', 'Riot API'],
  },
  {
    key: 'biotrack',
    title: 'BioTrack',
    link: 'https://biotrack.vercel.app/',
    image: '/projects/Screenshot_7.png',
    tech: ['Next.js', 'TypeScript', 'Prisma'],
  },
  {
    key: 'bugless',
    title: 'Bugless',
    link: 'https://bugless-omega.vercel.app/',
    image: '/projects/Screenshot_11.png',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    key: 'rds',
    title: '2RDS Consultoria',
    link: 'https://2rdsconsultoria.com.br/',
    image: '/projects/Screenshot_5.png',
    tech: ['React', 'Tailwind', 'SEO'],
  },
  {
    key: 'esc',
    title: 'ESC Empréstimos',
    link: 'https://esc-beryl.vercel.app/',
    image: '/projects/Screenshot_6.png',
    tech: ['React', 'Forms', 'CRM'],
  },
]

export default function Projects() {
  const t = useTranslations('work')
  const [activeIndex, setActiveIndex] = useState(0)

  const stats = [
    { value: '100%', label: t('stats.satisfaction') },
    { value: '5.0', label: t('stats.avgRating') },
    { value: '<30d', label: t('stats.avgDelivery') },
    { value: '24h', label: t('stats.responseTime') },
  ]

  return (
    <section id="projetos" className="relative overflow-hidden border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="02"
          kicker={t('kicker')}
          title={t('title')}
          accent={t('titleAccent')}
          subtitle={t('subtitle')}
        />

        {/* Desktop: interactive list + sticky preview. Mobile: stacked cards */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Project list */}
          <div className="order-2 lg:order-1">
            <div className="border-t border-line">
              {projects.map((project, index) => (
                <motion.a
                  key={project.key}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block border-b border-line py-6 transition-colors duration-300 md:py-7 ${
                    activeIndex === index ? 'lg:bg-white/[0.02]' : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  variants={fadeUp}
                  custom={0.05 * index}
                >
                  {/* Mobile-only image */}
                  <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-lg border border-line lg:hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 0px"
                    />
                  </div>

                  <div className="flex items-center gap-5">
                    <span
                      className={`font-mono text-sm transition-colors duration-300 ${
                        activeIndex === index ? 'text-tentacle-cyan' : 'text-text-secondary/40'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3
                          className={`font-display text-2xl font-semibold transition-colors duration-300 md:text-3xl ${
                            activeIndex === index ? 'text-text-primary' : 'text-text-secondary'
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-octopus-purple">
                          {t(`items.${project.key}.category`)}
                        </span>
                        <span className="text-text-secondary/30">·</span>
                        <span className="font-mono text-[11px] text-text-secondary">
                          {t(`items.${project.key}.metric`)}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        activeIndex === index
                          ? 'border-tentacle-cyan/50 text-tentacle-cyan lg:-rotate-0'
                          : 'border-line text-text-secondary/50'
                      } group-hover:border-tentacle-cyan/50 group-hover:text-tentacle-cyan`}
                    >
                      <Icon
                        name="arrow-up-right"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.p
              className="mt-8 font-body text-sm text-text-secondary"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={fadeUp}
            >
              {t('cta.text')}
            </motion.p>
          </div>

          {/* Sticky preview (desktop only) */}
          <div className="order-1 hidden lg:order-2 lg:block">
            <div className="sticky top-28">
              <motion.div
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-deep-ocean"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <Image
                      src={projects[activeIndex].image}
                      alt={projects[activeIndex].title}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 50vw, 0px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between p-6">
                  <div>
                    <p className="font-display text-lg font-semibold text-text-primary">
                      {projects[activeIndex].title}
                    </p>
                    <p className="mt-1 max-w-sm font-body text-sm text-text-secondary">
                      {t(`items.${projects[activeIndex].key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Tech chips of active project */}
              <div className="mt-4 flex flex-wrap gap-2">
                {projects[activeIndex].tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats + CTA */}
        <motion.div
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 bg-deep-ocean p-6 md:p-8">
              <span className="font-display text-2xl font-bold text-text-primary md:text-3xl">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-text-secondary">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          custom={0.1}
        >
          <a href="#contato" className="btn-primary group">
            {t('cta.button')}
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
