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

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 bg-[#EFE2CD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-display font-semibold text-[#173F4F] mb-6">
            simples de pedir, impossível de esquecer
          </h2>
          <p className="text-body text-[#3E3E3E] max-w-2xl mx-auto">
            Nosso processo foi pensado para ser prático e rápido, 
            sem abrir mão da qualidade e do cuidado em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {passos.map((passo) => (
            <div
              key={passo.numero}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#C8A86E] text-white flex items-center justify-center text-xl font-semibold mb-6 mx-auto">
                {passo.numero}
              </div>
              <h3 className="text-h3 font-display font-semibold text-[#173F4F] mb-4">
                {passo.titulo}
              </h3>
              <p className="text-body text-[#3E3E3E]/80 leading-relaxed">
                {passo.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

