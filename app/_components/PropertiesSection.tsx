'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Property {
  id: number
  title: string
  type: 'casa' | 'apartamento' | 'comercial' | 'terreno'
  price: number
  address: string
  bedrooms: number
  bathrooms: number
  area: number
  images: string[]
  featured?: boolean
  description: string
  ref: string
  amenities: string[]
  condominiumFeatures: string[]
  financing: string[]
}

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState<string>('todos')
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('imoveis')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const properties: Property[] = [
    {
      id: 1,
      title: 'VIA JARDINS – MORADA DE LARANJEIRAS',
      type: 'apartamento',
      price: 365000,
      address: 'Via Jardins, Morada de Laranjeiras - Serra/ES',
      bedrooms: 2,
      bathrooms: 1,
      area: 46,
      images: [
        '/imovel-viajardins/imagem1.jpeg',
        '/imovel-viajardins/imagem2.jpeg',
        '/imovel-viajardins/imagem3.jpeg',
        '/imovel-viajardins/imagem4.jpeg',
        '/imovel-viajardins/imagem5.jpeg',
        '/imovel-viajardins/imagem6.jpeg',
        '/imovel-viajardins/imagem7.jpeg',
        '/imovel-viajardins/imagem8.jpeg',
        '/imovel-viajardins/imagem9.jpeg',
        '/imovel-viajardins/imagem10.jpeg',
        '/imovel-viajardins/imagem11.jpeg',
        '/imovel-viajardins/imagem12.jpeg',
        '/imovel-viajardins/imagem13.jpeg'
      ],
      featured: false,
      ref: 'TM2666',
      description: 'Apartamento moderno, pronto para morar, com conforto e praticidade na melhor localização da Serra! Se você busca um imóvel com ótima valorização, conforto e uma estrutura completíssima, este apartamento é exatamente o que você procura.',
      amenities: [
        '46 m² muito bem distribuídos',
        'Sol poente — iluminação natural perfeita',
        'Varanda com fechamento em vidro',
        'Rebaixamento de gesso + projeto de iluminação',
        'Papel de parede e acabamento premium',
        'Cozinha totalmente reformada',
        '1 vaga de garagem coberta'
      ],
      condominiumFeatures: [
        'Piscinas',
        'Academia',
        'Quadras esportivas',
        'Salões de festa',
        'Churrasqueiras',
        'Playground',
        'Segurança 24h'
      ],
      financing: ['Aceita financiamento', 'Pode usar FGTS']
    },
    {
      id: 2,
      title: 'CASA LINEAR – ENSEADA DE JACARAÍPE',
      type: 'casa',
      price: 329000, 
      address: 'Enseada de Jacaraípe - Serra/ES',
      bedrooms: 2,
      bathrooms: 1,
      area: 67, 
      images: [
        '/imovel2/imagem1.jpeg',
        '/imovel2/imagem2.jpeg',
        '/imovel2/imagem3.jpeg',
        '/imovel2/imagem4.jpeg',
        '/imovel2/imagem5.jpeg',
        '/imovel2/imagem6.jpeg',
        '/imovel2/imagem7.jpeg',
        '/imovel2/imagem8.jpeg',
        '/imovel2/imagem9.jpeg',
        '/imovel2/imagem10.jpeg',
      ],
      featured: true,
      ref: 'MK7707',
      description: 'Casa linear moderna com fachada imponente, ambientes amplos e excelente localização em Enseada de Jacaraípe. Projeto funcional ideal para quem busca conforto, privacidade e um imóvel novinho para morar ou investir.',
      amenities: [
        'Terreno de 150 m²',
        '67 m² de construção',
        'Sala de estar e jantar com pé direito alto',
        '2 quartos confortáveis',
        'Garagem coberta',
        'Fachada moderna'
      ],
      condominiumFeatures: [
        'Não se aplica (casa independente)'
      ],
      financing: [
        'Aceita financiamento',
        'Valor promocional na planta: R$ 329.000',
        'Após início do acabamento: R$ 350.000',
        'Previsão de entrega: Março de 2026'
      ]
    }

  ]

  const filters = [
    { key: 'todos', label: 'Todos os Imóveis' },
    { key: 'casa', label: 'Casas' },
    { key: 'apartamento', label: 'Apartamentos' },
    { key: 'comercial', label: 'Comercial' },
    { key: 'terreno', label: 'Terrenos' }
  ]

  const filteredProperties = activeFilter === 'todos'
    ? properties
    : properties.filter(property => property.type === activeFilter)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const openModal = (property: Property) => {
    setSelectedProperty(property)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProperty(null)
    setIsImageModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  const openImageModal = (property: Property, index: number) => {
    setSelectedProperty(property)
    setCurrentImageIndex(index)
    setIsImageModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeImageModal = () => {
    setIsImageModalOpen(false)
    if (!selectedProperty) {
      document.body.style.overflow = 'auto'
    }
  }

  const nextImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) =>
        prev === selectedProperty.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProperty.images.length - 1 : prev - 1
      )
    }
  }

  const handleWhatsAppMessage = (property: Property) => {
    const message = `Olá Wanessa! Tenho interesse no imóvel ${property.ref} - ${property.title}. Poderia me fornecer mais informações?`
    const phone = '5527998758035'
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <>
      <section id="imoveis" className="py-20 bg-black overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#BC6C25]/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#BC6C25]/3 via-transparent to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Imóveis em <span className="bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] bg-clip-text text-transparent">Destaque</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Conheça nossa seleção de imóveis cuidadosamente escolhidos para atender diferentes perfis e necessidades
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-500 group ${activeFilter === filter.key
                    ? 'bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] text-white shadow-lg shadow-[#BC6C25]/30'
                    : 'bg-black/50 text-gray-300 hover:text-[#DDA15E] hover:bg-[#BC6C25]/10 border border-[#BC6C25]/20'
                  }`}
              >
                <span className="flex items-center gap-2">
                  {filter.label}
                  {activeFilter === filter.key && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Grid de Imóveis */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <div
                key={property.id}
                className={`bg-gradient-to-br from-black/50 to-[#BC6C25]/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#BC6C25]/10 hover:border-[#BC6C25]/30 group hover:scale-105 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openModal(property)}
              >
                <div className="relative h-48 bg-gradient-to-br from-[#BC6C25]/20 to-[#DDA15E]/20 overflow-hidden">
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] text-white px-4 py-2 rounded-full text-sm font-medium z-10 shadow-lg">
                      Destaque
                    </div>
                  )}
                  <div className="w-full h-full flex items-center justify-center relative">
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                    {property.images.length > 1 && (
                      <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                        {property.images.length} fotos
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-[#BC6C25]/20 text-[#BC6C25] px-3 py-1 rounded-full text-xs font-medium border border-[#BC6C25]/30 capitalize">
                      {property.type}
                    </span>
                    <span className="text-lg font-bold bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] bg-clip-text text-transparent">
                      {formatPrice(property.price)}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#DDA15E] transition-colors duration-300">
                    {property.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-1 flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.address}
                  </p>

                  <div className="flex justify-between items-center text-sm text-gray-400 border-t border-[#BC6C25]/20 pt-4">
                    <div className="flex items-center space-x-2 group-hover:text-[#DDA15E] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{property.bedrooms} quarto{property.bedrooms !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center space-x-2 group-hover:text-[#DDA15E] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{property.bathrooms} banheiro{property.bathrooms !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center space-x-2 group-hover:text-[#DDA15E] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                      <span>{property.area}m²</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 group relative overflow-hidden bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] text-white py-3 rounded-lg font-medium hover:from-[#A55A1F] hover:to-[#BC6C25] transition-all duration-500 shadow-lg shadow-[#BC6C25]/20 hover:shadow-[#BC6C25]/40">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Ver Detalhes
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <p className="text-lg text-gray-300 mb-6">
              Não encontrou o que procurava?
            </p>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden px-8 py-4 font-semibold transition-all duration-500
                border border-[#BC6C25]/50 text-[#BC6C25] rounded-lg
                hover:bg-[#BC6C25]/10 hover:border-[#BC6C25] hover:text-[#DDA15E] 
                hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                Fale Conosco
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Modal Principal do Imóvel */}
      {selectedProperty && !isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#BC6C25]/30 shadow-2xl">
            {/* Header do Modal */}
            <div className="relative">
              {/* Carousel de Imagens */}
              <div className="relative h-80 bg-gray-800 rounded-t-2xl overflow-hidden">
                <Image
                  src={selectedProperty.images[currentImageIndex]}
                  alt={selectedProperty.title}
                  fill
                  className="object-cover cursor-zoom-in"
                  onClick={() => openImageModal(selectedProperty, currentImageIndex)}
                />

                {/* Navegação de Imagens */}
                {selectedProperty.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Indicadores */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProperty.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-[#BC6C25]' : 'bg-white/50'
                            }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Botão Expandir Imagem */}
                <button
                  onClick={() => openImageModal(selectedProperty, currentImageIndex)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
                  title="Expandir imagem"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </button>

                {/* Botão Fechar */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-16 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Badge Destaque */}
                {selectedProperty.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Destaque
                  </div>
                )}

                {/* Contador de Imagens */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {currentImageIndex + 1} / {selectedProperty.images.length}
                </div>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6 md:p-8">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedProperty.title}
                  </h2>
                  <p className="text-gray-300 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {selectedProperty.address}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {selectedProperty.bedrooms} quarto{selectedProperty.bedrooms !== 1 ? 's' : ''}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {selectedProperty.bathrooms} banheiro{selectedProperty.bathrooms !== 1 ? 's' : ''}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                      {selectedProperty.area}m²
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] bg-clip-text text-transparent">
                    {formatPrice(selectedProperty.price)}
                  </div>
                  <div className="text-sm text-gray-400 text-right mt-1">
                    Ref: {selectedProperty.ref}
                  </div>
                </div>
              </div>

              {/* Descrição */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#BC6C25] mb-3">Descrição</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProperty.description}</p>
              </div>

              {/* Características do Imóvel */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#BC6C25] mb-3">Características do Imóvel</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProperty.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#BC6C25] rounded-full flex-shrink-0"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Área do Condomínio */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#BC6C25] mb-3">Área do Condomínio</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProperty.condominiumFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#DDA15E] rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financiamento */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#BC6C25] mb-3">Condições</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProperty.financing.map((item, index) => (
                    <span key={index} className="bg-[#BC6C25]/20 text-[#BC6C25] px-3 py-1 rounded-full text-sm border border-[#BC6C25]/30">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleWhatsAppMessage(selectedProperty)}
                  className="flex-1 group relative overflow-hidden bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] text-white py-4 rounded-lg font-semibold hover:from-[#A55A1F] hover:to-[#BC6C25] transition-all duration-500 shadow-lg shadow-[#BC6C25]/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.452" />
                    </svg>
                    Enviar Mensagem no WhatsApp
                  </span>
                </button>

                <button
                  onClick={closeModal}
                  className="px-8 py-4 border border-[#BC6C25]/50 text-[#BC6C25] rounded-lg font-medium hover:bg-[#BC6C25]/10 hover:border-[#BC6C25] transition-all duration-300"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Visualização de Imagem em Tamanho Real */}
      {isImageModalOpen && selectedProperty && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-7xl max-h-[95vh] w-full h-full flex items-center justify-center">
            {/* Imagem Principal */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedProperty.images[currentImageIndex]}
                alt={`${selectedProperty.title} - Imagem ${currentImageIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                quality={100}
              />
            </div>

            {/* Botão Fechar */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navegação de Imagens */}
            {selectedProperty.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Contador de Imagens */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm z-10">
                  {currentImageIndex + 1} / {selectedProperty.images.length}
                </div>

                {/* Miniaturas (Opcional - se quiser adicionar depois) */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2 z-10">
                  {selectedProperty.images.slice(0, 8).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex ? 'border-[#BC6C25]' : 'border-white/30'
                        }`}
                    >
                      <Image
                        src={image}
                        alt={`Miniatura ${index + 1}`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                  {selectedProperty.images.length > 8 && (
                    <div className="w-12 h-12 bg-black/50 text-white rounded-lg flex items-center justify-center text-xs border border-white/30">
                      +{selectedProperty.images.length - 8}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}