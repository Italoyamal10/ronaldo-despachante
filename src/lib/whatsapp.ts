const WHATSAPP_NUMBER = '55819165449'

export function openWhatsApp(
  message = 'Olá, vim pelo site e gostaria de mais informações.'
) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
