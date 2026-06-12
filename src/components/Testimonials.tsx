import { AnimatePresence, motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { TESTIMONIALS } from '../lib/constants'
import { SectionWrapper } from './SectionWrapper'

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const testimonial = TESTIMONIALS[current]

  return (
    <SectionWrapper id="depoimentos" className="section-padding bg-navy-900/50">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-gold-500"
          >
            Depoimentos
          </motion.span>
          <h2 className="section-title mt-3">O que nossos clientes dizem</h2>
        </div>

        <div className="relative mt-12 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-dark rounded-2xl p-8 shadow-card sm:p-10"
            >
              <div className="flex items-start justify-between">
                <Quote className="h-10 w-10 text-gold-500/30" />
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-white/80">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-700 font-semibold text-gold-400">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
                <div className="ml-auto hidden items-center gap-2 sm:flex">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-navy-900">
                    G
                  </div>
                  <span className="text-xs text-white/40">Google Reviews</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Depoimento ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? 'w-8 bg-gold-500' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
