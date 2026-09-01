'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Icon from '@/components/ui/Icon'
import { whatsappLink, EMAIL, SOCIAL } from '@/lib/site'

export default function Footer() {
  const t = useTranslations('footer')
  const tHeader = useTranslations('header')
  const tCommon = useTranslations()

  const navLinks = [
    { label: tHeader('services'), href: '#servicos' },
    { label: tHeader('work'), href: '#projetos' },
    { label: tHeader('process'), href: '#processo' },
    { label: tHeader('about'), href: '#sobre' },
    { label: tHeader('faq'), href: '#faq' },
    { label: tHeader('contact'), href: '#contato' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-line bg-abyss">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[2fr_1fr_1fr] md:gap-8 md:py-20">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Octodev" width={36} height={36} className="h-9 w-9" />
              <span className="font-display text-lg font-bold tracking-tight text-text-primary">
                octodev
                <span className="text-tentacle-cyan">.</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-text-secondary">
              {t('tagline')}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-text-secondary transition-colors hover:border-tentacle-cyan/50 hover:text-tentacle-cyan"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-text-secondary transition-colors hover:border-tentacle-cyan/50 hover:text-tentacle-cyan"
                aria-label="GitHub"
              >
                <Icon name="github" className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink(tCommon('whatsappMessage'))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-text-secondary transition-colors hover:border-emerald-400/50 hover:text-emerald-400"
                aria-label="WhatsApp"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">
              {t('nav')}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">
              {t('contactTitle')}
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="link-underline block w-fit font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {EMAIL}
              </a>
              <p className="flex items-center gap-2 font-body text-sm text-text-secondary">
                <Icon name="map-pin" className="h-4 w-4 shrink-0 text-tentacle-cyan/70" />
                {t('location')}
              </p>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="select-none overflow-hidden border-t border-line py-8" aria-hidden="true">
          <p className="text-outline whitespace-nowrap text-center font-display text-[16vw] font-bold leading-none tracking-tightest md:text-[12rem]">
            octodev
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-6 md:flex-row">
          <p className="font-body text-xs text-text-secondary/60">
            © {new Date().getFullYear()} Octodev. {t('copyright')}
          </p>
          <a
            href="#"
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-secondary transition-colors hover:text-text-primary"
          >
            {t('backToTop')}
            <Icon
              name="arrow-up-right"
              className="h-3.5 w-3.5 -rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
