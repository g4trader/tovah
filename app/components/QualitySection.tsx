export default function QualitySection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-petrol mb-8 text-center">
            qualidade não é detalhe, é o começo de tudo
          </h2>
          <p className="text-lg text-petrol/80 leading-relaxed mb-12 text-center">
            Na tovah, acreditamos que qualidade não é algo que se adiciona no final. 
            É o ponto de partida de tudo que fazemos. Cada ingrediente é selecionado 
            com cuidado, cada receita é testada e aprimorada, e cada embalagem é 
            pensada para preservar o sabor e a textura perfeitos.
          </p>

          <div className="bg-cream/30 rounded-xl p-8 border border-cream">
            <h3 className="text-xl font-serif text-petrol mb-6">
              Conservação e validade
            </h3>
            <ul className="space-y-4 text-petrol/80">
              <li className="flex items-start">
                <span className="text-gold mr-3 font-bold">•</span>
                <span>
                  <strong className="text-petrol">Temperatura:</strong> Mantenha sempre 
                  refrigerado entre 2°C e 8°C para garantir a textura e o sabor ideais.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 font-bold">•</span>
                <span>
                  <strong className="text-petrol">Validade:</strong> Consumir preferencialmente 
                  em até 7 dias após a data de fabricação, mantendo sempre refrigerado.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 font-bold">•</span>
                <span>
                  <strong className="text-petrol">Não congelar:</strong> Para preservar a 
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

