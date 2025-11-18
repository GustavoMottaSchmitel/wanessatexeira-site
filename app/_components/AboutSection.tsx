'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('sobre')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" className="py-20 bg-black overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#BC6C25]/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BC6C25]/3 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-libre-baskerville)' }}>
            Minha <span className="bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] bg-clip-text text-transparent">Missão</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] mx-auto rounded-full mb-6"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className={`lg:w-2/5 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#BC6C25]/5 to-transparent rounded-2xl -z-10 group-hover:from-[#BC6C25]/10 transition-all duration-500"></div>
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[#BC6C25]/20 transition-all duration-500 border border-[#BC6C25]/20">
                <Image 
                  src="/about-me.jpeg" 
                  alt="Wanessa Teixeira - Corretora de Imóveis"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className={`lg:w-3/5 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              {/* Nome com fonte Allura */}
              <div className="mb-8">
                <div className="text-7xl md:text-8xl text-white leading-none" style={{ fontFamily: 'var(--font-allura)' }}>
                  Wanessa{' '}
                  <span className="bg-gradient-to-r from-[#BC6C25] via-[#DDA15E] to-[#FEF3C7] bg-clip-text text-transparent">
                    Teixeira
                  </span>
                </div>
                <div className="w-48 h-1 bg-gradient-to-r from-[#BC6C25] to-transparent mt-4"></div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Sou <strong className="text-[#BC6C25]">Wanessa Teixeira</strong>, corretora de imóveis especializada em 
                <strong className="text-[#DDA15E]"> compra e venda de imóveis</strong>. Minha missão é oferecer soluções imobiliárias humanizadas, aliando meu conhecimento e dedicação para que  com ética, eu possa trazer toda segurança e transparência para uma boa negociação aos meus clientes.
              </p>

              {/* Specializations */}
              <div className="bg-gradient-to-br from-[#BC6C25]/5 to-[#BC6C25]/10 rounded-2xl p-6 mt-8 border border-[#BC6C25]/20">
                <h4 className="text-xl font-bold text-[#BC6C25] mb-4" style={{ fontFamily: 'var(--font-libre-baskerville)' }}>
                  Foco de Atuação
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Compra de Imóveis',
                    'Venda de Imóveis',
                    'Avaliação de Propriedades',
                    'Negociação Direta',
                    'Assessoria na Compra',
                    'Assessoria na Venda'
                  ].map((specialty, index) => (
                    <div key={index} className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-2 h-2 bg-[#BC6C25] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-white font-medium group-hover:text-[#DDA15E] transition-colors duration-300">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 font-semibold transition-all duration-500 overflow-hidden
                  bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] text-white 
                  hover:from-[#A55A1F] hover:to-[#BC6C25] hover:scale-105 
                  active:scale-95 shadow-2xl shadow-[#BC6C25]/30 
                  hover:shadow-[#BC6C25]/50 border border-[#BC6C25]/50 rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2">
                  Vamos Conversar
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 font-medium transition-all duration-500 group
                  border border-[#BC6C25]/50 text-[#BC6C25] rounded-lg
                  hover:bg-[#BC6C25]/10 hover:border-[#BC6C25] hover:text-[#DDA15E] 
                  hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  Conhecer Serviços
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}