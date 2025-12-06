const passos = [
  {
    numero: 1,
    titulo: 'Escolha seu sabor',
    descricao: 'Navegue pelos nossos sabores e escolha o que mais combina com você.',
  },
  {
    numero: 2,
    titulo: 'Faça seu pedido',
    descricao: 'Entre em contato pelo WhatsApp e informe o sabor e a quantidade desejada.',
  },
  {
    numero: 3,
    titulo: 'Aguarde a preparação',
    descricao: 'Preparamos seu pedido com cuidado e carinho, sempre fresquinho.',
  },
  {
    numero: 4,
    titulo: 'Receba e aproveite',
    descricao: 'Receba seu bolo gelado e desfrute de cada colherada. Simples assim!',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-cream/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-petrol mb-6">
            simples de pedir, impossível de esquecer
          </h2>
          <p className="text-lg text-petrol/80 max-w-2xl mx-auto">
            Nosso processo foi pensado para ser prático e rápido, 
            sem abrir mão da qualidade e do cuidado em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {passos.map((passo) => (
            <div
              key={passo.numero}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                {passo.numero}
              </div>
              <h3 className="text-xl font-serif text-petrol mb-3 mt-4">
                {passo.titulo}
              </h3>
              <p className="text-petrol/70 leading-relaxed">{passo.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

