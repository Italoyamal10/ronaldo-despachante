import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { TRUST_ITEMS } from '../lib/constants'
import { SectionWrapper } from './SectionWrapper'

export function TrustBar() {
  return (
    <SectionWrapper className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="glass-dark grid grid-cols-2 gap-4 rounded-2xl p-6 shadow-card sm:grid-cols-4 sm:gap-6 sm:p-8">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10">
                <CheckCircle2 className="h-5 w-5 text-gold-500" />
              </div>
              <span className="text-sm font-medium text-white/90 sm:text-base">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
