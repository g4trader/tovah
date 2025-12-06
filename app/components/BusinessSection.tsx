const WHATSAPP_NUMBER = '5511999999999' // Placeholder

export default function BusinessSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <section id="para-negocios" className="py-20 sm:py-28 bg-gradient-to-br from-petrol to-petrol/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-8 text-center">
            tovah também foi feita para quem vive de vender comida
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-8 text-center">
            Se você tem um negócio de alimentação e quer oferecer algo especial aos seus clientes, 
            a tovah pode ser a escolha perfeita. Nossos bolos gelados são ideais para revenda, 
            com embalagens práticas e sabor que fideliza clientes.
          </p>

          <div className="bg-white/10 rounded-xl p-8 mb-8 backdrop-blur-sm">
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start">
                <span className="text-gold mr-3 font-bold">•</span>
                <span>
                  <strong className="text-white">Embalagens individuais:</strong> Práticas e 
                  higiênicas, perfeitas para venda no balcão ou delivery.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 font-bold">•</span>
                <span>
                  <strong className="text-white">Margem atrativa:</strong> Preços especiais 
                  para revendedores, com condições que fazem sentido para o seu negócio.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 font-bold">•</span>
                <span>
                  <strong className="text-white">Produto diferenciado:</strong> Ofereça algo 
                  único que seus clientes vão lembrar e pedir novamente.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 font-bold">•</span>
                <span>
                  <strong className="text-white">Suporte dedicado:</strong> Atendimento 
                  especializado para revendedores, com prazos e condições flexíveis.
                </span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-petrol px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-200 font-medium"
            >
              Quero revender tovah
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

