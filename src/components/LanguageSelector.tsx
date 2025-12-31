'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const languages = [
  { code: 'pt', label: 'Português', short: 'PT', flag: '🇧🇷' },
  { code: 'en', label: 'English', short: 'EN', flag: '🇺🇸' },
  { code: 'es', label: 'Español', short: 'ES', flag: '🇪🇸' },
]

export default function LanguageSelector() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        type="button"
        className="group flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-tentacle-cyan/30 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Globe Icon */}
        <motion.div
          className="relative"
          animate={isOpen ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg
            className="w-4 h-4 text-tentacle-cyan"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </motion.div>

        {/* Current Language */}
        <span className="font-mono text-xs font-medium text-text-primary">
          {currentLanguage.short}
        </span>

        {/* Chevron */}
        <motion.svg
          className="w-3 h-3 text-text-secondary group-hover:text-tentacle-cyan transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              className="absolute top-full right-0 mt-3 min-w-[160px] overflow-hidden rounded-xl bg-abyss/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 z-50"
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* Header */}
              <div className="px-4 py-2 border-b border-white/5">
                <span className="text-xs text-text-secondary/60 font-medium uppercase tracking-wider">
                  Language
                </span>
              </div>

              {/* Options */}
              <div className="py-1">
                {languages.map((lang, index) => (
                  <motion.button
                    key={lang.code}
                    type="button"
                    className={`w-full flex items-center gap-3 px-4 py-2.5 transition-all duration-200 ${
                      lang.code === locale
                        ? 'bg-gradient-to-r from-tentacle-cyan/10 to-transparent text-tentacle-cyan'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    }`}
                    onClick={() => switchLocale(lang.code)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    {/* Flag */}
                    <span className="text-lg">{lang.flag}</span>

                    {/* Language Name */}
                    <span className="font-body text-sm flex-1 text-left">
                      {lang.label}
                    </span>

                    {/* Check Icon */}
                    {lang.code === locale && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      >
                        <svg className="w-4 h-4 text-tentacle-cyan" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Decorative gradient line */}
              <div className="h-px bg-gradient-to-r from-transparent via-tentacle-cyan/30 to-transparent" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
