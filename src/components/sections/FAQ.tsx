'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

type FAQItem = {
  question: string
  answer: string
}

function FAQItemComponent({ faq, index, isOpen, onToggle }: {
  faq: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      className="border-b border-white/10 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <button
        type="button"
        className="w-full py-6 flex items-center justify-between text-left gap-4 cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg text-text-primary group-hover:text-tentacle-cyan transition-colors">
          {faq.question}
        </span>
        <motion.span
          className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-text-secondary group-hover:bg-white/20 group-hover:text-text-primary transition-all"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-body text-text-secondary pb-6 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const t = useTranslations('faq')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    { question: t('questions.cost.question'), answer: t('questions.cost.answer') },
    { question: t('questions.timeline.question'), answer: t('questions.timeline.answer') },
    { question: t('questions.maintenance.question'), answer: t('questions.maintenance.answer') },
    { question: t('questions.process.question'), answer: t('questions.process.answer') },
    { question: t('questions.payment.question'), answer: t('questions.payment.answer') },
    { question: t('questions.technology.question'), answer: t('questions.technology.answer') },
    { question: t('questions.satisfaction.question'), answer: t('questions.satisfaction.answer') },
    { question: t('questions.companySize.question'), answer: t('questions.companySize.answer') },
  ]

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean via-abyss to-deep-ocean" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

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

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="card-glass p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <FAQItemComponent
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-body text-text-secondary mb-4">
            {t('cta.text')}
          </p>
          <motion.a
            href="#contato"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {t('cta.button')}
          </motion.a>
        </motion.div>
      </div>

      {/* Wave decoration */}
      <motion.svg
        className="absolute bottom-0 left-0 right-0 w-full h-16 opacity-20"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,30 Q360,60 720,30 Q1080,0 1440,30"
          fill="none"
          stroke="url(#faq-wave-stroke)"
          strokeWidth="2"
          animate={{
            d: [
              'M0,30 Q360,60 720,30 Q1080,0 1440,30',
              'M0,30 Q360,0 720,30 Q1080,60 1440,30',
              'M0,30 Q360,60 720,30 Q1080,0 1440,30',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <defs>
          <linearGradient id="faq-wave-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </motion.svg>
    </section>
  )
}
