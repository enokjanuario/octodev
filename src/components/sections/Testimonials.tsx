'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

const testimonials = [
  {
    id: 1,
    content: 'Excelente profissional! Organizado, competente, responde rápido, atencioso. Ficamos muito satisfeitos com a entrega do sistema. As funcionalidades e o layout funcionando perfeitamente. Super recomendo!',
    author: 'Ricardo Mendes',
    role: 'Dashboard integrado com site Wix',
    rating: 5,
  },
  {
    id: 2,
    content: 'Enok é um baita profissional. Prometeu antes do prazo e, além de cumprir, surpreendeu com o resultado. Super disposto, bom observador e resolutivo. Com certeza vamos fazer mais projetos juntos.',
    author: 'Fernanda Lima',
    role: 'Landing page e integração com CRM',
    rating: 5,
  },
  {
    id: 3,
    content: 'Ótimo suporte, velocidade e solução. Recomendo muito o Enok.',
    author: 'Carlos Eduardo',
    role: 'API para dados de produtos da Shopee',
    rating: 5,
  },
  {
    id: 4,
    content: 'Executou meu projeto super bem, fizemos uma reunião de vídeo e já fechei com ele. Paguei a mais que o combinado por ter feito um serviço tão bom.',
    author: 'Juliana Souza',
    role: 'Landing page com SEO',
    rating: 5,
  },
  {
    id: 5,
    content: 'Excelente profissional, comprometido e transparente, fez um ótimo trabalho. Recomendo a toda a comunidade.',
    author: 'Bruno Almeida',
    role: 'Deploy do sistema',
    rating: 5,
  },
  {
    id: 6,
    content: 'Rápido, atencioso e ainda me ensinou alguns macetes, com certeza farei outros trabalhos com ele e sem dúvidas recomendo.',
    author: 'Mariana Costa',
    role: 'Landing page para infoproduto',
    rating: 5,
  },
  {
    id: 7,
    content: 'Enok desde o começo se mostrou muito prestativo. Atencioso e criativo. Não mede esforços. Faz além do combinado. De verdade, ele surpreendeu as expectativas no meu primeiro projeto.',
    author: 'Lucas Ferreira',
    role: 'Site de tecnologia e sistemas',
    rating: 5,
  },
]

export default function Testimonials() {
  const t = useTranslations('testimonials')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean via-abyss to-deep-ocean" />

      {/* Water Ripple Effect */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 left-0 right-0 h-1/2"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
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
          <p className="font-body text-text-secondary text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="w-full"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-glass p-8 md:p-12 text-center relative">
                  {/* Floating Bubbles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-tentacle-cyan/30"
                      style={{
                        left: `${20 + i * 15}%`,
                        bottom: '-10px',
                      }}
                      animate={{
                        y: [-10, -50, -10],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-yellow-400 text-xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-body text-xl md:text-2xl text-text-primary mb-8 leading-relaxed">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-display font-semibold text-lg text-text-primary">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="font-body text-text-secondary">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-tentacle-cyan w-8'
                    : 'bg-text-secondary/30 hover:bg-text-secondary/50'
                }`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              type="button"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/20 transition-all cursor-pointer"
              onClick={() => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              type="button"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/20 transition-all cursor-pointer"
              onClick={() => goToSlide((currentIndex + 1) % testimonials.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Wave decoration */}
        <motion.svg
          className="absolute bottom-0 left-0 right-0 w-full h-16 opacity-20"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,30 Q360,0 720,30 Q1080,60 1440,30"
            fill="none"
            stroke="url(#wave-stroke)"
            strokeWidth="2"
            animate={{
              d: [
                'M0,30 Q360,0 720,30 Q1080,60 1440,30',
                'M0,30 Q360,60 720,30 Q1080,0 1440,30',
                'M0,30 Q360,0 720,30 Q1080,60 1440,30',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <defs>
            <linearGradient id="wave-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </section>
  )
}
