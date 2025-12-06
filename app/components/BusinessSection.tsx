const WHATSAPP_NUMBER = '5511999999999' // Placeholder

export default function BusinessSection() {
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
    <section id="para-negocios" className="py-20 bg-[#173F4F] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-center">
            tovah também foi feita para quem vive de vender comida
          </h2>
          <p className="max-w-2xl mx-auto text-white/90 leading-relaxed text-center">
            Se você tem um negócio de alimentação e quer oferecer algo especial aos seus clientes, 
            a tovah pode ser a escolha perfeita. Nossos bolos gelados são ideais para revenda, 
            com embalagens práticas e sabor que fideliza clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl p-5 bg-white/5"
            >
              <h3 className="font-semibold text-white mb-2">{beneficio.titulo}</h3>
              <p className="text-sm text-white/80">{beneficio.descricao}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C8A86E] text-[#173F4F] rounded-full px-6 py-3 font-medium hover:bg-[#B8965A] transition-all duration-200"
          >
            Quero revender tovah
          </a>
        </div>
      </div>
    </section>
  )
}

