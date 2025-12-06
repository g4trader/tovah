import Link from 'next/link'

const WHATSAPP_NUMBER = '5511999999999' // Placeholder

export default function Hero() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-br from-cream via-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo à esquerda */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-petrol leading-tight">
              bolo gelado feito do bem, pensado para repetir
            </h1>
            <p className="text-lg sm:text-xl text-petrol/80 leading-relaxed max-w-xl">
              Receitas cuidadosamente elaboradas, ingredientes selecionados e 
              embalagens práticas. Cada colherada é uma experiência única de sabor e textura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-petrol text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-200 font-medium text-center"
              >
                Pedir pelo WhatsApp
              </a>
              <Link
                href="#sabores"
                className="bg-white border-2 border-petrol text-petrol px-8 py-4 rounded-full hover:bg-cream transition-all duration-200 font-medium text-center"
              >
                Conhecer os sabores
              </Link>
            </div>
          </div>

          {/* Card produto à direita */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gold/20 to-cream rounded-2xl p-8 shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-cream to-gold/30 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-white/50 rounded-full flex items-center justify-center">
                    <span className="text-6xl">🍰</span>
                  </div>
                  <p className="text-petrol/60 font-medium">Foto do produto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

