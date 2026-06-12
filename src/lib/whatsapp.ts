import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from './constants'

export function openWhatsApp(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? WHATSAPP_MESSAGE)
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
