import { motion } from 'framer-motion'
import {
  Clock,
  UserCheck,
  Zap,
  Route,
  Lock,
  Rocket,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BENEFITS } from '../lib/constants'
import { SectionWrapper } from './SectionWrapper'

const iconMap: Record<string, LucideIcon> = {
  clock: Clock,
  'user-check': UserCheck,
  zap: Zap,
  route: Route,
  lock: Lock,
  rocket: Rocket,
}

export function Benefits() {
  return (
    <SectionWrapper className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-gold-500"
          >
            Vantagens
          </motion.span>
          <h2 className="section-title mt-3">Por que escolher a Ronaldo Despachante?</h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] ?? Clock

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-navy-800/50 to-navy-900/80 p-6 transition-all duration-500 hover:border-gold-500/30 hover:shadow-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 transition-all duration-500 group-hover:from-gold-500/5 group-hover:to-transparent" />

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500/10 transition-colors group-hover:bg-gold-500/20">
                    <Icon className="h-6 w-6 text-gold-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
