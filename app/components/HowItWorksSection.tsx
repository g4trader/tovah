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
    <section id="como-funciona" className="py-20 bg-[#F9F2E5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#173F4F] text-center">
            simples de pedir, impossível de esquecer
          </h2>
          <p className="max-w-2xl mx-auto text-center text-slate-600 mt-4">
            Nosso processo foi pensado para ser prático e rápido, 
            sem abrir mão da qualidade e do cuidado em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {passos.map((passo) => (
            <div
              key={passo.numero}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-[#C8A86E] text-white flex items-center justify-center text-sm font-semibold mb-4">
                {passo.numero}
              </div>
              <h3 className="text-lg font-semibold text-[#173F4F] mb-2">
                {passo.titulo}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{passo.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

