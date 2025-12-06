import Image from 'next/image'
import Link from 'next/link'

const WHATSAPP_NUMBER = '5511999999999' // Placeholder
const INSTAGRAM_HANDLE = 'tovah' // Placeholder

export default function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`
  const instagramLink = `https://instagram.com/${INSTAGRAM_HANDLE}`

  return (
    <footer id="contato" className="bg-[#0D2632] text-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <Image
              src="/logo-tovah.svg"
              alt="tovah"
              width={200}
              height={60}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-slate-300 leading-relaxed text-sm">
              tovah — bolos gelados feitos do bem.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-white">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sabores" className="text-slate-300 hover:text-[#C8A86E] transition-colors text-sm">
                  Sabores
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="text-slate-300 hover:text-[#C8A86E] transition-colors text-sm">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="#para-negocios" className="text-slate-300 hover:text-[#C8A86E] transition-colors text-sm">
                  Para negócios
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-slate-300 hover:text-[#C8A86E] transition-colors text-sm">
                  Sobre a tovah
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#C8A86E] transition-colors flex items-center text-sm"
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
                  className="text-slate-300 hover:text-[#C8A86E] transition-colors flex items-center text-sm"
                >
                  <span className="mr-2">📷</span>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de CNPJ/Razão Social */}
        <div className="border-t border-slate-700 pt-6 mb-4">
          <p className="text-xs text-slate-400 text-center">
            CNPJ: 00.000.000/0001-00 | Razão Social: Tovah Bolos Gelados LTDA
          </p>
        </div>

        {/* Direitos autorais */}
        <div className="text-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} tovah. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

