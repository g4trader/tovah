import Link from 'next/link'

const WHATSAPP_NUMBER = '5511999999999' // Placeholder

export default function Hero() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-[#F4E9D7] to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo à esquerda */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#173F4F] leading-tight">
              bolo gelado feito do bem, pensado para repetir
            </h1>
            <p className="text-base md:text-lg text-slate-700 max-w-md mt-6">
              Receitas cuidadosamente elaboradas, ingredientes selecionados e 
              embalagens práticas. Cada colherada é uma experiência única de sabor e textura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-7 py-3 bg-[#173F4F] text-white text-base font-medium shadow-sm hover:bg-[#102A36] transition-all duration-200 text-center"
              >
                Pedir pelo WhatsApp
              </a>
              <Link
                href="#sabores"
                className="border border-[#173F4F] text-[#173F4F] bg-white hover:bg-slate-50 rounded-full px-5 py-3 ml-3 text-center transition-all duration-200 font-medium"
              >
                Conhecer os sabores
              </Link>
            </div>
          </div>

          {/* Card produto à direita */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200 p-6 md:p-8">
              <div className="aspect-square bg-gradient-to-br from-[#F4E9D7] to-[#C8A86E]/20 rounded-2xl flex items-center justify-center mb-4">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-white/70 rounded-full flex items-center justify-center">
                    <span className="text-6xl">🍰</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-[#C8A86E]"></span>
                <span className="text-xs uppercase tracking-wide text-slate-500">feito fresquinho sob demanda</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

