'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const HERO_IMAGE_SRC = '/3.jpg'
const LOGO_ICON_SRC = '/ICONE.png'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      id="inicio" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 min-h-screen flex items-center bg-black overflow-hidden"
    >
      {/* Imagem de Fundo com Efeito Cinematográfico */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE_SRC}
          alt="Imóveis de Luxo - Wanessa Teixeira"
          fill
          priority
          className="object-cover object-center scale-110"
          style={{ 
            filter: 'brightness(0.4) contrast(1.1)',
            transform: 'scale(1.1)'
          }}
        />
        {/* Overlay Gradiente Premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-[#BC6C25]/20"></div>
        {/* Efeito de Partículas Douradas Sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BC6C25]/5 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Conteúdo Principal */}
          <div className={`lg:w-1/2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            <div className="mb-6">
              <div 
                className="text-7xl md:text-8xl lg:text-9xl text-white leading-none whitespace-nowrap" 
                style={{ fontFamily: 'var(--font-allura)' }}
              >
                <span className="text-white">Wanessa</span>
                {' '}
                <span className="bg-gradient-to-r from-[#BC6C25] via-[#DDA15E] to-[#FEF3C7] bg-clip-text text-transparent">
                  Teixeira
                </span>
              </div>
              <div className="w-64 h-1 bg-gradient-to-r from-[#BC6C25] to-transparent mt-6"></div>
            </div>
            
            {/* Subtítulo Ajustado */}
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl text-gray-200 font-light tracking-wide uppercase inline-block border-b border-[#BC6C25]/50 pb-1">
                Corretora de Imóveis
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#BC6C25] to-transparent mt-1"></div>
            </div>
            
            {/* Descrição Ajustada */}
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl leading-relaxed font-light">
              Cada imóvel é o início de uma nova história. Mais do que vender imóveis, a minha missão é trazer oportunidades de investimento seguro e rentável para toda a vida.
            </p>
            
            {/* CTA Buttons Ajustados */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.getElementById('imoveis')?.scrollIntoView({ behavior: 'smooth' })}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                className="group relative px-8 py-4 font-semibold transition-all duration-500 overflow-hidden
                  bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] text-white 
                  hover:from-[#A55A1F] hover:to-[#BC6C25] hover:scale-105 
                  active:scale-95 shadow-2xl shadow-[#BC6C25]/30 
                  hover:shadow-[#BC6C25]/50 border border-[#BC6C25]/50 rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2 text-base">
                  Explorar Imóveis
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 font-medium transition-all duration-500 group
                  border border-[#BC6C25]/50 text-[#BC6C25] rounded-lg
                  hover:bg-[#BC6C25]/10 hover:border-[#BC6C25] hover:text-[#DDA15E] 
                  hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2 text-base">
                  Consultoria Personalizada
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
          {/* Elemento Visual da Logo Ajustado */}
          <div className={`hidden lg:flex lg:w-1/2 justify-end items-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative w-80 h-80 opacity-10 hover:opacity-20 transition-all duration-1000 group">
              <Image 
                src={LOGO_ICON_SRC} 
                alt="Logo Wanessa Teixeira"
                fill
                className="object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-1000"
              />
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#BC6C25]/0 via-[#BC6C25]/5 to-[#BC6C25]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Ajustado */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-[#BC6C25]/80 hover:text-[#DDA15E] transition-all duration-500 group"
        >
          <span className="text-xs font-medium tracking-widest uppercase group-hover:scale-110 transition-transform duration-500">
            Conheça Mais
          </span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-[#BC6C25]/50 to-transparent rounded-full overflow-hidden group-hover:from-[#DDA15E]">
            <div className="w-full h-3 bg-[#BC6C25] rounded-full animate-bounce group-hover:bg-[#DDA15E]"></div>
          </div>
        </button>
      </div>
    </section>
  )
}