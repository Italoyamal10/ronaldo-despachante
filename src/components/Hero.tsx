import { motion, useScroll, useTransform } from 'framer-motion'
import {
  BadgeCheck,
  CreditCard,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { AnimatedText } from './AnimatedText'
import { openWhatsApp } from '../lib/whatsapp'

const floatingElements = [
  { Icon: CreditCard, label: 'CNH', className: 'top-[18%] right-[8%] animation-delay-0', delay: 0 },
  { Icon: FileText, label: 'CRLV', className: 'top-[42%] right-[2%] animation-delay-1000', delay: 0.5 },
  { Icon: BadgeCheck, label: 'Aprovado', className: 'bottom-[32%] right-[12%] animation-delay-2000', delay: 1 },
  { Icon: ShieldCheck, label: 'Confiável', className: 'top-[28%] right-[22%] animation-delay-1500', delay: 0.8 },
]

export function Hero() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 120])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-bg.jpg'), url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(212,175,55,0.08),transparent_50%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-32">
        {/* Left - Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-2 text-sm text-gold-400"
          >
            <Sparkles className="h-4 w-4" />
            Despachante documentalista de confiança
          </motion.div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <AnimatedText text="Resolva sua documentação sem burocracia." />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            Cuidamos de toda a documentação do seu veículo para você economizar
            tempo, evitar multas e dirigir tranquilo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <motion.button
              animate={{ boxShadow: ['0 0 0 0 rgba(37,211,102,0.4)', '0 0 0 14px rgba(37,211,102,0)', '0 0 0 0 rgba(37,211,102,0)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openWhatsApp()}
              className="btn-whatsapp"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openWhatsApp()}
              className="btn-outline"
            >
              Solicitar Orçamento
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-navy-900 bg-navy-700 text-xs font-medium text-gold-400"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-gold-500">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-sm text-white/50">+500 clientes atendidos</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto aspect-[4/5] max-w-md">
            {/* Glass card - attendant representation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="glass absolute inset-4 overflow-hidden rounded-3xl shadow-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy-800/80 to-navy-950/90" />
              <div className="relative flex h-full flex-col items-center justify-center p-8">
                <div className="mb-6 flex items-center justify-center">
                  <img
                    src="/logo-rd.png"
                    alt="Ronaldo Despachante"
                    className="h-32 w-auto"
                  />
                </div>
                <p className="text-center font-display text-xl font-semibold text-white">
                  Atendimento Especializado
                </p>
                <p className="mt-2 text-center text-sm text-white/60">
                  Equipe pronta para resolver sua documentação
                </p>

                <div className="mt-8 grid w-full grid-cols-2 gap-3">
                  {['CNH', 'CRLV', 'Transferência', 'Licenciamento'].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-white/80"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            {floatingElements.map(({ Icon, label, className, delay }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                transition={{
                  opacity: { delay: 1 + index * 0.15, duration: 0.5 },
                  scale: { delay: 1 + index * 0.15, duration: 0.5 },
                  y: { delay: 1.5 + delay, duration: 4 + index, repeat: Infinity, ease: 'easeInOut' },
                }}
                className={`absolute ${className} glass flex items-center gap-2 rounded-2xl px-4 py-3 shadow-glass`}
              >
                <Icon className="h-5 w-5 text-gold-500" />
                <span className="text-sm font-medium text-white/90">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-gold-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
