export default function QualitySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#173F4F] mb-8 text-center">
            qualidade não é detalhe, é o começo de tudo
          </h2>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-12 text-center">
            Na tovah, acreditamos que qualidade não é algo que se adiciona no final. 
            É o ponto de partida de tudo que fazemos. Cada ingrediente é selecionado 
            com cuidado, cada receita é testada e aprimorada, e cada embalagem é 
            pensada para preservar o sabor e a textura perfeitos.
          </p>

          <div className="bg-[#F4E9D7]/30 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-xl font-serif text-[#173F4F] mb-6">
              Conservação e validade
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start">
                <span className="text-[#C8A86E] mr-3 font-bold">•</span>
                <span>
                  <strong className="text-[#173F4F]">Temperatura:</strong> Mantenha sempre 
                  refrigerado entre 2°C e 8°C para garantir a textura e o sabor ideais.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C8A86E] mr-3 font-bold">•</span>
                <span>
                  <strong className="text-[#173F4F]">Validade:</strong> Consumir preferencialmente 
                  em até 7 dias após a data de fabricação, mantendo sempre refrigerado.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C8A86E] mr-3 font-bold">•</span>
                <span>
                  <strong className="text-[#173F4F]">Não congelar:</strong> Para preservar a 
                  textura cremosa característica, não recomendamos o congelamento do produto.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

