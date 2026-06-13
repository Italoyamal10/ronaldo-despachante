const WHATSAPP_NUMBER = '558199165449'

export function openWhatsApp(
  message = 'Olá, vim pelo site e gostaria de mais informações.'
) {
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    '_blank'
  )
}