import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { COMPANY } from '../lib/constants'
import { openWhatsApp } from '../lib/whatsapp'

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-navy-950/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/30 bg-navy-800 font-display text-sm font-bold text-gold-500 transition-colors group-hover:border-gold-500">
            RD
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-3">
              <span className="h-5 w-px bg-gold-500/50" />
              <span className="text-xs font-semibold tracking-[0.2em] text-white/90">
                {COMPANY.name.toUpperCase()}
              </span>
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { label: 'Serviços', href: '#serviços' },
            { label: 'Como Funciona', href: '#como-funciona' },
            { label: 'Depoimentos', href: '#depoimentos' },
            { label: 'FAQ', href: '#faq' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/70 transition-colors hover:text-gold-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openWhatsApp()}
          className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-shadow hover:shadow-[#25D366]/40 sm:px-5"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </motion.button>
      </div>
    </motion.header>
  )
}
