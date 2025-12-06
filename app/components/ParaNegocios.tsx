const WHATSAPP_NUMBER = '5511999999999'

export default function ParaNegocios() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`

  const beneficios = [
    {
      titulo: 'Embalagens individuais',
      descricao: 'Práticas e higiênicas, perfeitas para venda no balcão ou delivery.',
    },
    {
      titulo: 'Margem atrativa',
      descricao: 'Preços especiais para revendedores, com condições que fazem sentido para o seu negócio.',
    },
    {
      titulo: 'Produto diferenciado',
      descricao: 'Ofereça algo único que seus clientes vão lembrar e pedir novamente.',
    },
    {
      titulo: 'Suporte dedicado',
      descricao: 'Atendimento especializado para revendedores, com prazos e condições flexíveis.',
    },
  ]

  return (
    <section id="para-negocios" className="py-24 bg-[#173F4F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-display font-semibold mb-6">
            tovah também foi feita para quem vive de vender comida
          </h2>
          <p className="text-body-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Se você tem um negócio de alimentação e quer oferecer algo especial aos seus clientes, 
            a tovah pode ser a escolha perfeita. Nossos bolos gelados são ideais para revenda, 
            com embalagens práticas e sabor que fideliza clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-3xl p-6 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                {beneficio.titulo}
              </h3>
              <p className="text-body text-white/80 leading-relaxed">
                {beneficio.descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-4 bg-[#C8A86E] text-[#173F4F] text-[15px] font-semibold hover:bg-[#B8965A] transition-all duration-200 shadow-md"
          >
            Quero revender tovah
          </a>
        </div>
      </div>
    </section>
  )
}

