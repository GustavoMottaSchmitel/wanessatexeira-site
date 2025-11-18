'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const LOGO_SRC = '/LETTERINNGG.png' 
const ICON_SRC = '/ICONE.png' 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['inicio', 'sobre', 'servicos', 'imoveis', 'contato']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveItem(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveItem(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: 'Início', href: 'inicio' },
    { label: 'Sobre', href: 'sobre' },
    { label: 'Serviços', href: 'servicos' },
    { label: 'Imóveis', href: 'imoveis' },
    { label: 'Contato', href: 'contato' }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-2xl shadow-2xl border-b border-[#BC6C25]/30 py-3' 
          : 'bg-black py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo Premium */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="relative h-full transition-all duration-500 hover:scale-105 active:scale-95 flex items-center group"
          >
            <div className="relative">
              <Image 
                src={isScrolled ? ICON_SRC : LOGO_SRC}
                alt="Wanessa Teixeira Negócios Imobiliários"
                width={isScrolled ? 45 : 280}
                height={isScrolled ? 45 : 60}
                className="object-contain transition-all duration-700 filter brightness-100 group-hover:brightness-110"
              />
              {/* Efeito de brilho na logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BC6C25]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
            </div>
          </button>
          
          {/* Navegação Premium */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                className={`relative px-6 py-3 font-medium transition-all duration-500 group overflow-hidden ${
                  activeItem === item.href
                    ? 'text-[#BC6C25] font-semibold' 
                    : 'text-white/80 hover:text-[#BC6C25]'
                }`}
              >
                {/* Efeito de fundo dourado sutil */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#BC6C25]/0 via-[#BC6C25]/5 to-[#BC6C25]/0 transition-all duration-500 ${
                  activeItem === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
                
                {/* Linha dourada animada */}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] transition-all duration-500 ${
                  activeItem === item.href 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`} />
                
                <span className="relative z-10 flex items-center gap-2 tracking-wide">
                  {item.label}
                  {activeItem === item.href && (
                    <div className="w-1 h-1 bg-[#BC6C25] rounded-full animate-pulse"></div>
                  )}
                </span>
              </button>
            ))}
            
            {/* CTA Button Premium */}
            <button
              onClick={() => scrollToSection('contato')}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              className="ml-6 px-8 py-3 font-semibold transition-all duration-500 relative overflow-hidden group
                bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] text-white 
                hover:from-[#A55A1F] hover:to-[#BC6C25] hover:scale-105 
                active:scale-95 shadow-2xl shadow-[#BC6C25]/30 
                hover:shadow-[#BC6C25]/50 border border-[#BC6C25]/50"
            >
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <span className="relative z-10 flex items-center gap-2">
                Fale Conosco
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </nav>

          {/* Mobile Menu Button Premium */}
          <button 
            className={`lg:hidden p-3 rounded-xl transition-all duration-500 group relative
              ${isMenuOpen ? 'bg-[#BC6C25]/10 text-[#BC6C25]' : 'text-white/80 hover:text-[#BC6C25] hover:bg-[#BC6C25]/5'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-6 relative transition-transform duration-500 ${isMenuOpen ? 'rotate-180' : ''}`}>
              <span className={`absolute left-0 w-6 h-0.5 rounded-full transition-all duration-500 bg-current ${isMenuOpen ? 'top-3 rotate-45 scale-110' : 'top-1'}`} />
              <span className={`absolute left-0 w-6 h-0.5 rounded-full transition-all duration-500 bg-current ${isMenuOpen ? 'opacity-0 scale-0' : 'top-3 opacity-100 scale-100'}`} />
              <span className={`absolute left-0 w-6 h-0.5 rounded-full transition-all duration-500 bg-current ${isMenuOpen ? 'top-3 -rotate-45 scale-110' : 'top-5'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Premium */}
        <div className={`lg:hidden overflow-hidden transition-all duration-700 ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 border-t border-[#BC6C25]/20 bg-black/95 backdrop-blur-2xl rounded-2xl">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`py-4 px-6 text-left font-medium rounded-xl transition-all duration-500 group
                    ${activeItem === item.href 
                      ? 'bg-[#BC6C25]/10 text-[#BC6C25] border-l-4 border-[#BC6C25] font-semibold' 
                      : 'text-white/80 hover:text-[#BC6C25] hover:bg-[#BC6C25]/5'
                    }`}
                >
                  <span className="flex items-center gap-3">
                    {item.label}
                    {activeItem === item.href && (
                      <div className="w-2 h-2 bg-[#BC6C25] rounded-full animate-pulse"></div>
                    )}
                  </span>
                </button>
              ))}
              
              {/* Mobile CTA Premium */}
              <button
                onClick={() => scrollToSection('contato')}
                className="mt-4 py-4 px-6 text-center font-semibold rounded-xl transition-all duration-500
                  bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] text-white 
                  hover:from-[#A55A1F] hover:to-[#BC6C25] active:scale-95 
                  shadow-lg shadow-[#BC6C25]/20 border border-[#BC6C25]/50"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}