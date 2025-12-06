'use client'

import { useState } from 'react'

const faqs = [
  {
    pergunta: 'Como faço para pedir?',
    resposta: 'É simples! Entre em contato conosco pelo WhatsApp através do botão "Pedir pelo WhatsApp" e informe o sabor e a quantidade desejada. Nossa equipe vai te ajudar com todo o processo.',
  },
  {
    pergunta: 'Quais são as formas de pagamento?',
    resposta: 'Aceitamos PIX, cartão de crédito e débito. O pagamento pode ser feito no momento do pedido ou na entrega, dependendo da sua preferência e da região.',
  },
  {
    pergunta: 'Vocês fazem entrega?',
    resposta: 'Sim! Fazemos entrega em determinadas regiões. Entre em contato pelo WhatsApp para verificar se atendemos sua área e conhecer as condições de entrega.',
  },
  {
    pergunta: 'Quanto tempo dura o bolo gelado?',
    resposta: 'Nossos bolos gelados devem ser mantidos refrigerados entre 2°C e 8°C e têm validade de até 7 dias após a fabricação. Recomendamos consumir o quanto antes para aproveitar o sabor e a textura no auge.',
  },
  {
    pergunta: 'Posso congelar o bolo gelado?',
    resposta: 'Não recomendamos o congelamento, pois pode alterar a textura cremosa característica do produto. O ideal é manter sempre refrigerado e consumir dentro do prazo de validade.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-petrol mb-6">
            dúvidas frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-cream rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-cream/20 hover:bg-cream/30 transition-colors duration-200"
              >
                <span className="font-semibold text-petrol text-lg">{faq.pergunta}</span>
                <span className="text-gold text-2xl font-bold ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-white text-petrol/80 leading-relaxed">
                  {faq.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

