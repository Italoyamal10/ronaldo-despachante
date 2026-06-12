import { Instagram, MessageCircle, Clock } from 'lucide-react'
import { COMPANY } from '../lib/constants'
import { openWhatsApp } from '../lib/whatsapp'

const quickLinks = [
  { label: 'Serviços', href: '#serviços' },
  { label: 'Contato', href: '#faq' },
  { label: 'WhatsApp', href: '#', action: () => openWhatsApp() },
]

export function Footer() {
  return (
    <footer id="contato" className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/30 bg-navy-800 font-display text-sm font-bold text-gold-500">
                RD
              </div>
              <span className="font-display text-lg font-semibold text-white">
                {COMPANY.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Documentação veicular com agilidade, segurança e atendimento
              personalizado. Resolva tudo sem burocracia.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-500">
              Links Rápidos
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-sm text-white/60 transition-colors hover:text-gold-400"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-gold-400"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-500">
              Contato
            </h4>
            <ul className="mt-4 space-y-4">
              <li>
                <button
                  onClick={() => openWhatsApp()}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#25D366]"
                >
                  <MessageCircle className="h-4 w-4" />
                  {COMPANY.whatsapp}
                </button>
              </li>
              <li>
                <a
                  href={COMPANY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold-400"
                >
                  <Instagram className="h-4 w-4" />
                  {COMPANY.instagram}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                {COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
