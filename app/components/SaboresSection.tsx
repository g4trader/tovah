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
    <section id="sabores" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#173F4F] text-center">
            sabores que abraçam na primeira colherada
          </h2>
          <p className="max-w-2xl mx-auto text-center text-slate-600 mt-4">
            Cada sabor foi pensado para proporcionar uma experiência única. 
            Ingredientes selecionados e receitas que valorizam o paladar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {sabores.map((sabor, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-shadow"
            >
              <div className="text-[11px] uppercase tracking-[0.16em] text-[#C8A86E] mb-2">
                Sabor
              </div>
              <h3 className="text-lg font-semibold text-[#173F4F]">{sabor.nome}</h3>
              <p className="text-sm text-slate-600 mt-2">{sabor.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

