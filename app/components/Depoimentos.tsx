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

export default function Depoimentos() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-display font-semibold text-[#173F4F] mb-6">
            quem prova, pede de novo
          </h2>
          <p className="text-body text-[#3E3E3E] max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o que nos move. 
            Veja o que quem já experimentou tem a dizer sobre a tovah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-100 shadow-card hover:shadow-hover transition-all duration-200 p-8"
            >
              <div className="text-6xl text-[#C8A86E] mb-6 leading-none">&ldquo;</div>
              <p className="text-body text-[#3E3E3E] leading-relaxed mb-6">
                {depoimento.texto}
              </p>
              <p className="font-semibold text-[#173F4F] text-lg">— {depoimento.autor}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-[#173F4F] text-white px-10 py-4 rounded-full">
            <span className="font-display text-xl">centenas de unidades vendidas</span>
          </div>
        </div>
      </div>
    </section>
  )
}

