'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const projects = [
  {
    id: 1,
    title: 'Academia Y',
    description: 'Sistema de ranking gamificado para comunidade de League of Legends. Integração com API da Riot Games, dashboards em tempo real e analytics completo.',
    category: 'Sistema Web',
    technologies: ['React', 'Node.js', 'API Riot Games', 'Analytics'],
    gradient: 'from-yellow-500 to-orange-500',
    image: '/projects/Screenshot_1.png',
    link: 'http://academia-y.com.br/',
    metrics: 'Mais de 500 usuários',
  },
  {
    id: 2,
    title: 'BioTrack',
    description: 'Plataforma completa que conecta personal trainers e alunos: gestão de treinos, fichas personalizadas, avaliações físicas com gráficos evolutivos e acompanhamento em tempo real.',
    category: 'SaaS',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Dashboard'],
    gradient: 'from-green-500 to-cyan-500',
    image: '/projects/Screenshot_7.png',
    link: 'https://biotrack.vercel.app/',
    metrics: 'Personal + Alunos',
  },
  {
    id: 3,
    title: 'Bugless',
    description: 'Landing page de alta conversão para agência de desenvolvimento de software. Design moderno, animações fluidas e otimizada para captação de leads qualificados.',
    category: 'Landing Page',
    technologies: ['Next.js', 'Tailwind', 'Framer Motion', 'SEO'],
    gradient: 'from-purple-500 to-blue-500',
    image: '/projects/Screenshot_11.png',
    link: 'https://bugless-omega.vercel.app/',
    metrics: 'Alta conversão',
  },
  {
    id: 4,
    title: '2RDS Consultoria',
    description: 'Site institucional profissional para consultoria empresarial. Foco em credibilidade, apresentação de serviços e geração de oportunidades de negócio.',
    category: 'Site Institucional',
    technologies: ['React', 'Tailwind', 'Responsivo', 'SEO'],
    gradient: 'from-cyan-500 to-blue-500',
    image: '/projects/Screenshot_5.png',
    link: 'https://2rdsconsultoria.com.br/',
    metrics: 'Design profissional',
  },
  {
    id: 5,
    title: 'ESC Empréstimos',
    description: 'Landing page de captação para empresa financeira de empréstimos. Formulário inteligente, validações em tempo real e integração com CRM para qualificação de leads.',
    category: 'Landing Page',
    technologies: ['React', 'Forms', 'Validação', 'CRM'],
    gradient: 'from-pink-500 to-purple-500',
    image: '/projects/Screenshot_6.png',
    link: 'https://esc-beryl.vercel.app/',
    metrics: 'Conversão otimizada',
  },
]

const categoryColors: Record<string, string> = {
  'Sistema Web': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'SaaS': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Landing Page': 'bg-octopus-purple/20 text-octopus-purple border-octopus-purple/30',
  'Site Institucional': 'bg-tentacle-cyan/20 text-tentacle-cyan border-tentacle-cyan/30',
}

export default function Projects() {
  const t = useTranslations('projects')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean via-abyss to-deep-ocean" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-octopus-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-tentacle-cyan/10 rounded-full blur-3xl" />

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
          <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + index * 0.1,
                duration: 0.6,
              }}
            >
              {/* Card */}
              <motion.div
                className="card-glass h-full relative overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent" />

                  {/* Metrics Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-abyss/80 text-tentacle-cyan border border-tentacle-cyan/30 backdrop-blur-sm">
                      {project.metrics}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <span
                    className={`inline-block font-mono text-xs px-3 py-1 rounded-full border mb-3 ${
                      categoryColors[project.category] || categoryColors['Landing Page']
                    }`}
                  >
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold mb-2 text-text-primary group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description with tooltip on hover */}
                  <div className="relative group/desc">
                    <p className="font-body text-text-secondary text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    {/* Full description tooltip */}
                    <div className="absolute left-0 right-0 bottom-full mb-2 p-3 rounded-lg bg-abyss/95 border border-white/20 backdrop-blur-md opacity-0 invisible group-hover/desc:opacity-100 group-hover/desc:visible transition-all duration-300 z-20 shadow-xl">
                      <p className="font-body text-text-primary text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                        <div className="border-8 border-transparent border-t-abyss/95"></div>
                      </div>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2 py-1 rounded-full bg-white/5 text-text-secondary border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="font-mono text-xs px-2 py-1 rounded-full bg-white/5 text-text-secondary border border-white/10">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Project Link */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="font-body text-sm text-tentacle-cyan group-hover:text-octopus-purple transition-colors inline-flex items-center gap-2">
                      {t('viewProject')}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { value: '100%', label: t('stats.satisfaction') },
            { value: '5.0', label: t('stats.avgRating') },
            { value: '< 30 days', label: t('stats.avgDelivery') },
            { value: '24h', label: t('stats.responseTime') },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="font-body text-xs md:text-sm text-text-secondary">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="font-body text-text-secondary mb-6">
            {t('cta.text')}
          </p>
          <motion.a
            href="#contato"
            className="btn-primary inline-flex items-center gap-2"
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
