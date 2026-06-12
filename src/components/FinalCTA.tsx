import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { openWhatsApp } from '../lib/whatsapp'
import { SectionWrapper } from './SectionWrapper'

export function FinalCTA() {
  return (
    <SectionWrapper className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-8 py-16 text-center shadow-card sm:px-16 sm:py-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)]" />
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-gold-500/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-gold-500/5 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Pare de perder tempo com burocracia.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">
              Fale agora com nossa equipe e resolva sua documentação de forma
              rápida e segura.
            </p>

            <motion.button
              animate={{
                boxShadow: [
                  '0 0 30px rgba(37,211,102,0.3)',
                  '0 0 50px rgba(37,211,102,0.5)',
                  '0 0 30px rgba(37,211,102,0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openWhatsApp()}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 text-lg font-bold text-white transition-colors hover:bg-[#20bd5a] sm:px-14 sm:py-6 sm:text-xl"
            >
              <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
              Chamar no WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
