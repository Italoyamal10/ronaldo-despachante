const WHATSAPP_NUMBER = '5581991654492'

export function openWhatsApp(
  message = 'Olá, vim pelo site e gostaria de mais informações.'
) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
