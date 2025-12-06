import Link from 'next/link'

const WHATSAPP_NUMBER = '5511999999999'

export default function Hero() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <section className="bg-gradient-to-b from-[#F4E9D7] to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda */}
          <div className="space-y-8">
            <h1 className="text-h1 font-display font-semibold text-[#173F4F] leading-tight">
              bolo gelado feito do bem, pensado para repetir
            </h1>
            <p className="text-body-lg text-[#3E3E3E] max-w-lg leading-relaxed">
              Receitas cuidadosamente elaboradas, ingredientes selecionados e 
              embalagens práticas. Cada colherada é uma experiência única de sabor e textura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Pedir pelo WhatsApp
              </a>
              <Link
                href="#sabores"
                className="btn-secondary text-center"
              >
                Conhecer os sabores
              </Link>
            </div>
          </div>

          {/* Coluna direita - Card premium */}
          <div className="relative">
            <div className="rounded-[40px] p-10 bg-white shadow-hero">
              {/* Espaço para imagem - proporção 4:3 */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#F4E9D7] to-[#E7D7BC] rounded-3xl flex items-center justify-center mb-6">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-white/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-7xl">🍰</span>
                  </div>
                </div>
              </div>
              {/* Selo */}
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C8A86E]"></span>
                <span className="text-micro uppercase tracking-wider text-[#3E3E3E]/60">
                  feito fresquinho sob demanda
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
