'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LanguageSelector from '@/components/LanguageSelector'
import Icon from '@/components/ui/Icon'

export default function Header() {
  const t = useTranslations('header')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#servicos', label: t('services'), index: '01' },
    { href: '#projetos', label: t('work'), index: '02' },
    { href: '#processo', label: t('process'), index: '03' },
    { href: '#sobre', label: t('about'), index: '04' },
    { href: '#faq', label: t('faq'), index: '05' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        isScrolled
          ? 'border-line bg-abyss/80 backdrop-blur-xl py-3'
          : 'border-transparent py-5'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Octodev"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight text-text-primary">
            octodev
            <span className="text-tentacle-cyan">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              <span className="mr-1.5 font-mono text-[10px] text-tentacle-cyan/70">
                {link.index}
              </span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSelector />
          <a
            href="#contato"
            className="btn-primary gap-2 px-5 py-2.5 text-sm"
          >
            {t('startProject')}
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile: language + menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSelector />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <Icon name={isMobileMenuOpen ? 'x' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu — full overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[57px] z-40 bg-abyss/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex h-full flex-col justify-between px-6 py-10">
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="flex items-baseline gap-4 border-b border-line py-5 font-display text-3xl font-semibold text-text-primary"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-mono text-xs text-tentacle-cyan">
                      {link.index}
                    </span>
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="#contato"
                className="btn-primary w-full"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('startProject')}
                <Icon name="arrow-up-right" className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
