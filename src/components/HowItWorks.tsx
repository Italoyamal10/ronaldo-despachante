import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, Upload, CheckCircle } from 'lucide-react'
import { useRef } from 'react'
import { STEPS } from '../lib/constants'
import { SectionWrapper } from './SectionWrapper'

const stepIcons = [MessageCircle, Upload, CheckCircle]

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ['0%', '100%'])

  return (
    <SectionWrapper id="como-funciona" className="section-padding bg-navy-900/50">
      <div ref={containerRef} className="mx-auto max-w-4xl">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-gold-500"
          >
            Processo Simples
          </motion.span>
          <h2 className="section-title mt-3">Resolva tudo em apenas 3 passos</h2>
        </div>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:left-1/2 md:block md:-translate-x-px">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-gold-500 to-gold-500/30"
            />
          </div>

          <div className="space-y-12 md:space-y-20">
            {STEPS.map((step, index) => {
              const Icon = stepIcons[index]
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="font-display text-5xl font-bold text-gold-500/20">
                      {step.number}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-white/60">{step.description}</p>
                  </div>

                  <div className="relative z-10 flex shrink-0 justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-900 shadow-glow"
                    >
                      <Icon className="h-6 w-6 text-gold-500" />
                    </motion.div>
                  </div>

                  <div className="hidden flex-1 md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
