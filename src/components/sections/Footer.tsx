'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const whatsappNumber = '5531991508940'
const email = 'ejrocha07@gmail.com'

export default function Footer() {
  const t = useTranslations('footer')
  const tCommon = useTranslations()

  const whatsappMessage = encodeURIComponent(tCommon('whatsappMessage'))
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const footerLinks = {
    servicos: [
      { label: 'Web Apps', href: '#servicos' },
      { label: 'Mobile', href: '#servicos' },
      { label: 'E-commerce', href: '#servicos' },
      { label: t('links.contact'), href: '#servicos' },
    ],
    empresa: [
      { label: t('links.cases'), href: '#projetos' },
      { label: t('links.about'), href: '#sobre' },
      { label: t('links.process'), href: '#processo' },
      { label: t('links.contact'), href: '#contato' },
    ],
  }

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 L0,60 Z"
            fill="url(#footer-wave)"
          />
          <defs>
            <linearGradient id="footer-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
              <stop offset="50%" stopColor="rgba(6, 182, 212, 0.2)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.2)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-abyss" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a
              href="#"
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/logo.png"
                alt="Octodev"
                width={48}
                height={48}
                className="w-12 h-12 glow-effect"
              />
              <span className="font-display font-bold text-2xl text-gradient">
                Octodev
              </span>
            </motion.a>
            <p className="font-body text-text-secondary text-sm leading-relaxed mb-6">
              {t('tagline')}
            </p>
            <p className="font-mono text-xs text-text-secondary/60">
              {t('slogan')}
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-text-primary mb-4">
              {t('services')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="font-body text-sm text-text-secondary hover:text-tentacle-cyan transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-text-primary mb-4">
              {t('company')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="font-body text-sm text-text-secondary hover:text-tentacle-cyan transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-text-primary mb-4">
              {t('contactTitle')}
            </h4>
            <div className="space-y-3">
              <motion.a
                href={`mailto:${email}`}
                className="block font-body text-sm text-text-secondary hover:text-tentacle-cyan transition-colors"
                whileHover={{ x: 4 }}
              >
                {email}
              </motion.a>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-green-500 hover:text-green-400 transition-colors"
                whileHover={{ x: 4 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </motion.a>
              <p className="font-body text-sm text-text-secondary">
                {t('location')}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-text-secondary/60 text-center md:text-left">
            © {new Date().getFullYear()} Octodev. {t('copyright')}
          </p>

          {/* Floating Octopus */}
          <motion.div
            className="flex items-center gap-2"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="text-2xl">🐙</span>
            <span className="font-mono text-xs text-text-secondary/40">
              {t('madeWith')}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Decorative tentacle at bottom */}
      <motion.svg
        className="absolute bottom-0 left-0 w-48 h-24 opacity-10"
        viewBox="0 0 200 100"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <path
          d="M0,50 Q50,30 80,50 Q110,70 150,50 Q180,30 200,50"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-0 right-0 w-48 h-24 opacity-10"
        viewBox="0 0 200 100"
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <path
          d="M0,50 Q30,70 80,50 Q120,30 160,50 Q180,60 200,50"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </motion.svg>
    </footer>
  )
}
