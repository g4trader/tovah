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

export default function SaboresSection() {
  return (
    <section id="sabores" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-petrol mb-6">
            sabores que abraçam na primeira colherada
          </h2>
          <p className="text-lg text-petrol/80 max-w-2xl mx-auto">
            Cada sabor foi pensado para proporcionar uma experiência única. 
            Ingredientes selecionados e receitas que valorizam o paladar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sabores.map((sabor, index) => (
            <div
              key={index}
              className="bg-cream/30 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-cream"
            >
              <h3 className="text-xl font-serif text-petrol mb-3">{sabor.nome}</h3>
              <p className="text-petrol/70 leading-relaxed">{sabor.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

