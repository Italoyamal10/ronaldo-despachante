import { motion } from 'framer-motion'
import {
  BadgeCheck,
  CarFront,
  CreditCard,
  FileCheck,
  Files,
  IdCard,
  Scale,
  Search,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SERVICES } from '../lib/constants'
import { openWhatsApp } from '../lib/whatsapp'
import { SectionWrapper } from './SectionWrapper'

const iconMap: Record<string, LucideIcon> = {
  'car-front': CarFront,
  'file-check': FileCheck,
  'id-card': IdCard,
  'credit-card': CreditCard,
  files: Files,
  'shield-check': ShieldCheck,
  search: Search,
  'badge-check': BadgeCheck,
  scale: Scale,
}

export function Services() {
  return (
    <SectionWrapper id="serviços" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-gold-500"
          >
            Nossos Serviços
          </motion.span>
          <h2 className="section-title mt-3">Como podemos ajudar você?</h2>
          <p className="section-subtitle mx-auto">
            Soluções completas em documentação veicular com atendimento
            personalizado e processos ágeis.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] ?? FileCheck

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                className="perspective-1000 group"
              >
                <div className="glass-dark relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 group-hover:border-gold-500/30 group-hover:shadow-card">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold-500/5 transition-all duration-500 group-hover:bg-gold-500/10" />

                  <div className="relative">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-gold-500" />
                    </div>

                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {service.description}
                    </p>

                    <motion.button
                      whileHover={{ x: 4 }}
                      onClick={() =>
                        openWhatsApp(
                          `Olá, vim pelo site e gostaria de um orçamento para ${service.title}.`,
                        )
                      }
                      className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
                    >
                      Solicitar
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
