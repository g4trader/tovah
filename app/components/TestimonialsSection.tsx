const depoimentos = [
  {
    texto: 'Nunca tinha experimentado um bolo gelado tão cremoso! O sabor de leite ninho é perfeito, nem muito doce nem sem graça. Já pedi três vezes!',
    autor: 'Maria Silva',
  },
  {
    texto: 'Comprei para revender na minha lanchonete e os clientes adoraram! É prático, saboroso e tem uma apresentação linda. Recomendo!',
    autor: 'João Santos',
  },
  {
    texto: 'A textura é incrível, derrete na boca. O chocolate intenso é meu favorito, mas já provei todos e são deliciosos. tovah virou tradição aqui em casa!',
    autor: 'Ana Costa',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-petrol mb-6">
            quem prova, pede de novo
          </h2>
          <p className="text-lg text-petrol/80 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o que nos move. 
            Veja o que quem já experimentou tem a dizer sobre a tovah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="text-gold text-4xl mb-4">&ldquo;</div>
              <p className="text-petrol/80 leading-relaxed mb-6 italic">
                {depoimento.texto}
              </p>
              <p className="text-petrol font-semibold">— {depoimento.autor}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-petrol text-white px-8 py-4 rounded-full">
            <span className="font-serif text-xl">centenas de unidades vendidas</span>
          </div>
        </div>
      </div>
    </section>
  )
}

