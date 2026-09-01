'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Icon from '@/components/ui/Icon'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeUp, VIEWPORT } from '@/lib/motion'

const testimonials = [
  {
    id: 1,
    content:
      'Excelente profissional! Organizado, competente, responde rápido, atencioso. Ficamos muito satisfeitos com a entrega do sistema. As funcionalidades e o layout funcionando perfeitamente. Super recomendo!',
    author: 'Ricardo Mendes',
    role: 'Dashboard integrado com site Wix',
  },
  {
    id: 2,
    content:
      'Enok é um baita profissional. Prometeu antes do prazo e, além de cumprir, surpreendeu com o resultado. Super disposto, bom observador e resolutivo. Com certeza vamos fazer mais projetos juntos.',
    author: 'Fernanda Lima',
    role: 'Landing page e integração com CRM',
  },
  {
    id: 3,
    content: 'Ótimo suporte, velocidade e solução. Recomendo muito o Enok.',
    author: 'Carlos Eduardo',
    role: 'API para dados de produtos da Shopee',
  },
  {
    id: 4,
    content:
      'Executou meu projeto super bem, fizemos uma reunião de vídeo e já fechei com ele. Paguei a mais que o combinado por ter feito um serviço tão bom.',
    author: 'Juliana Souza',
    role: 'Landing page com SEO',
  },
  {
    id: 5,
    content:
      'Excelente profissional, comprometido e transparente, fez um ótimo trabalho. Recomendo a toda a comunidade.',
    author: 'Bruno Almeida',
    role: 'Deploy do sistema',
  },
  {
    id: 6,
    content:
      'Rápido, atencioso e ainda me ensinou alguns macetes, com certeza farei outros trabalhos com ele e sem dúvidas recomendo.',
    author: 'Mariana Costa',
    role: 'Landing page para infoproduto',
  },
  {
    id: 7,
    content:
      'Enok desde o começo se mostrou muito prestativo. Atencioso e criativo. Não mede esforços. Faz além do combinado. De verdade, ele surpreendeu as expectativas no meu primeiro projeto.',
    author: 'Lucas Ferreira',
    role: 'Site de tecnologia e sistemas',
  },
]

export default function Testimonials() {
  const t = useTranslations('testimonials')

  return (
    <section className="relative overflow-hidden border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="05"
          kicker={t('kicker')}
          title={t('title')}
          accent={t('titleAccent')}
          subtitle={t('subtitle')}
        />

        {/* Masonry columns */}
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.id}
              className="mb-4 break-inside-avoid rounded-xl border border-line bg-deep-ocean/60 p-7 transition-colors duration-300 hover:border-octopus-purple/30"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={fadeUp}
              custom={0.04 * index}
            >
              <div className="mb-4 flex gap-1 text-tentacle-cyan" aria-label="5/5">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" className="h-3.5 w-3.5" />
                ))}
              </div>
              <blockquote className="font-body text-[15px] leading-relaxed text-text-primary/90">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="font-display text-sm font-semibold text-text-primary">
                  {testimonial.author}
                </p>
                <p className="mt-0.5 font-mono text-[11px] text-text-secondary">
                  {testimonial.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
