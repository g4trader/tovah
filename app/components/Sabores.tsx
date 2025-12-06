const sabores = [
  {
    nome: 'Leite Ninho Cremoso',
    descricao: 'Cremoso e suave, com o sabor clássico do leite ninho que todo mundo ama.',
  },
  {
    nome: 'Chocolate Intenso',
    descricao: 'Para os amantes de chocolate. Intenso, cremoso e irresistível.',
  },
  {
    nome: 'Coco Tostado',
    descricao: 'O sabor tropical do coco com um toque especial de tostado.',
  },
  {
    nome: 'Prestígio Gelado',
    descricao: 'A combinação perfeita de chocolate e coco, geladinho e delicioso.',
  },
  {
    nome: 'Maracujá Cremoso',
    descricao: 'O azedinho do maracujá equilibrado com a cremosidade do bolo gelado.',
  },
  {
    nome: 'Sensação de Morango',
    descricao: 'Fresco e doce, com pedacinhos de morango em cada colherada.',
  },
]

export default function Sabores() {
  return (
    <section id="sabores" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-display font-semibold text-[#173F4F] mb-6">
            sabores que abraçam na primeira colherada
          </h2>
          <p className="text-body text-[#3E3E3E] max-w-2xl mx-auto">
            Cada sabor foi pensado para proporcionar uma experiência única. 
            Ingredientes selecionados e receitas que valorizam o paladar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sabores.map((sabor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-100 shadow-card hover:shadow-hover transition-all duration-200 p-6"
            >
              <div className="text-micro uppercase tracking-widest text-[#C8A86E] mb-3 font-medium">
                Sabor
              </div>
              <h3 className="text-h3 font-display font-semibold text-[#173F4F] mb-3">
                {sabor.nome}
              </h3>
              <p className="text-body text-[#3E3E3E]/80 leading-relaxed">
                {sabor.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

