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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-display font-semibold text-[#173F4F] mb-6">
            dúvidas frequentes
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-200 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between py-6 transition-colors duration-200 hover:bg-slate-50/50 px-2 -mx-2 rounded-lg"
              >
                <span className="text-body font-medium text-[#173F4F] pr-6">
                  {faq.pergunta}
                </span>
                <span className={`text-[#C8A86E] text-2xl font-light flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-6 pt-2 text-body text-[#3E3E3E]/80 leading-relaxed">
                  {faq.resposta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

