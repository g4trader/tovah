import Image from 'next/image'
import Link from 'next/link'

const WHATSAPP_NUMBER = '5511999999999'
const INSTAGRAM_HANDLE = 'tovah'

export default function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`
  const instagramLink = `https://instagram.com/${INSTAGRAM_HANDLE}`

  return (
    <footer id="contato" className="bg-[#0A1C25] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <Image
              src="/logo-tovah.svg"
              alt="tovah"
              width={200}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-body text-white/70 leading-relaxed">
              tovah — bolos gelados feitos do bem.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-display text-xl mb-6 text-white">Links rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#sabores" className="text-body text-white/70 hover:text-[#C8A86E] transition-colors">
                  Sabores
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="text-body text-white/70 hover:text-[#C8A86E] transition-colors">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="#para-negocios" className="text-body text-white/70 hover:text-[#C8A86E] transition-colors">
                  Para negócios
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-body text-white/70 hover:text-[#C8A86E] transition-colors">
                  Sobre a tovah
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-xl mb-6 text-white">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-white/70 hover:text-[#C8A86E] transition-colors flex items-center"
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
                  className="text-body text-white/70 hover:text-[#C8A86E] transition-colors flex items-center"
                >
                  <span className="mr-2">📷</span>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de CNPJ/Razão Social */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <p className="text-micro text-white/40 text-center">
            CNPJ: 00.000.000/0001-00 | Razão Social: Tovah Bolos Gelados LTDA
          </p>
        </div>

        {/* Direitos autorais */}
        <div className="text-center">
          <p className="text-micro text-white/40">
            © {new Date().getFullYear()} tovah. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
