import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from './constants'

export function openWhatsApp(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? WHATSAPP_MESSAGE)
  const url = `https://wa.me/${+5581991654492}?text=${"Olá, Gostaria de saber mais sobre os serviços do Ronaldo Despachante!"}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
