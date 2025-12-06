import Image from 'next/image'
import Link from 'next/link'

const WHATSAPP_NUMBER = '5511999999999' // Placeholder
const INSTAGRAM_HANDLE = 'tovah' // Placeholder

export default function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`
  const instagramLink = `https://instagram.com/${INSTAGRAM_HANDLE}`

  return (
    <footer id="contato" className="bg-petrol text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <Image
              src="/logo-tovah.svg"
              alt="tovah"
              width={120}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              tovah — bolos gelados feitos do bem.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-serif text-xl mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sabores" className="text-white/80 hover:text-gold transition-colors">
                  Sabores
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="text-white/80 hover:text-gold transition-colors">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="#para-negocios" className="text-white/80 hover:text-gold transition-colors">
                  Para negócios
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-white/80 hover:text-gold transition-colors">
                  Sobre a tovah
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-serif text-xl mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-gold transition-colors flex items-center"
                >
                  <span className="mr-2">💬</span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-gold transition-colors flex items-center"
                >
                  <span className="mr-2">📷</span>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de CNPJ/Razão Social */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <p className="text-white/60 text-sm text-center">
            CNPJ: 00.000.000/0001-00 | Razão Social: Tovah Bolos Gelados LTDA
          </p>
        </div>

        {/* Direitos autorais */}
        <div className="text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} tovah. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

