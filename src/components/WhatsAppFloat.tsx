import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { openWhatsApp } from '../lib/whatsapp'

export function WhatsAppFloat() {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => openWhatsApp()}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow-lg transition-shadow hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-[#25D366]/30"
      />
      <MessageCircle className="relative h-7 w-7 sm:h-8 sm:w-8" />
    </motion.button>
  )
}
