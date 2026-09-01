'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Icon from '@/components/ui/Icon'
import { whatsappLink } from '@/lib/site'
import { fadeUp, VIEWPORT } from '@/lib/motion'

const questionKeys = [
  'timeline',
  'maintenance',
  'process',
  'payment',
  'technology',
  'satisfaction',
  'companySize',
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <motion.div
      className="border-b border-line"
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeUp}
      custom={0.04 * index}
    >
      <button
        type="button"
        className="group flex w-full items-start justify-between gap-6 py-6 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-text-secondary/40">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className={`font-display text-lg font-medium transition-colors duration-300 ${
              isOpen ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
            }`}
          >
            {question}
          </span>
        </span>
        <span
          className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? 'rotate-45 border-tentacle-cyan/50 text-tentacle-cyan'
              : 'border-line text-text-secondary group-hover:text-text-primary'
          }`}
        >
          <Icon name="plus" className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 pl-9 font-body leading-relaxed text-text-secondary">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const t = useTranslations('faq')
  const tCommon = useTranslations()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          {/* Sticky intro */}
          <div>
            <motion.div
              className="lg:sticky lg:top-28"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={fadeUp}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="kicker">06 / {t('kicker')}</span>
                <span className="h-px max-w-24 flex-1 bg-gradient-to-r from-tentacle-cyan/40 to-transparent" />
              </div>
              <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-text-primary md:text-5xl">
                {t('title')} <span className="text-accent">{t('titleAccent')}</span>
              </h2>
              <p className="mt-5 max-w-md font-body text-lg text-text-secondary">
                {t('subtitle')}
              </p>
              <div className="mt-10 hidden lg:block">
                <p className="mb-4 font-body text-sm text-text-secondary">{t('cta.text')}</p>
                <a
                  href={whatsappLink(tCommon('whatsappMessage'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  {t('cta.button')}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Accordion */}
          <div className="border-t border-line">
            {questionKeys.map((key, index) => (
              <FAQItem
                key={key}
                index={index}
                question={t(`questions.${key}.question`)}
                answer={t(`questions.${key}.answer`)}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}

            {/* Mobile CTA */}
            <div className="mt-10 lg:hidden">
              <p className="mb-4 font-body text-sm text-text-secondary">{t('cta.text')}</p>
              <a
                href={whatsappLink(tCommon('whatsappMessage'))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                {t('cta.button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
