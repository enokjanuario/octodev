export const WHATSAPP_NUMBER = '5531991508940'
export const EMAIL = 'ejrocha07@gmail.com'

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/enokjrocha/',
  github: 'https://github.com/enokjanuario',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
