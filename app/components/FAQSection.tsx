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
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#173F4F] text-center">
            dúvidas frequentes
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-200 py-3"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between py-2"
              >
                <span className="text-sm md:text-base font-medium text-[#173F4F] pr-4">
                  {faq.pergunta}
                </span>
                <span className={`text-[#C8A86E] text-xl font-bold flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="pt-2 pb-4 text-slate-600 text-sm md:text-base leading-relaxed">
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

