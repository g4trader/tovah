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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#173F4F] text-center">
            quem prova, pede de novo
          </h2>
          <p className="max-w-2xl mx-auto text-center text-slate-600 mt-4">
            A satisfação dos nossos clientes é o que nos move. 
            Veja o que quem já experimentou tem a dizer sobre a tovah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
            >
              <div className="text-4xl text-[#C8A86E] mb-4">&ldquo;</div>
              <p className="text-slate-700 leading-relaxed mb-4">
                {depoimento.texto}
              </p>
              <p className="font-semibold text-[#173F4F] mt-4">— {depoimento.autor}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-[#173F4F] text-white px-8 py-4 rounded-full">
            <span className="font-serif text-lg">centenas de unidades vendidas</span>
          </div>
        </div>
      </div>
    </section>
  )
}

