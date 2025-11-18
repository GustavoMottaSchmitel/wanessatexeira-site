'use client'

import { useState, useEffect } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('contato')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você integraria com seu backend ou serviço de email
    console.log('Formulário enviado:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contato" className="py-20 bg-black overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#BC6C25]/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BC6C25]/3 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-libre-baskerville)' }}>
            Entre em <span className="bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] bg-clip-text text-transparent">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Pronto para encontrar o imóvel dos seus sonhos? Entre em contato e vamos conversar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-libre-baskerville)' }}>
              Vamos Conversar
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] rounded-full p-3 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#BC6C25] mb-1 group-hover:text-[#DDA15E] transition-colors duration-300">Telefone/WhatsApp</h4>
                  <p className="text-gray-300">(27) 99875-8035</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] rounded-full p-3 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#BC6C25] mb-1 group-hover:text-[#DDA15E] transition-colors duration-300">Email</h4>
                  <p className="text-gray-300">teixeiraesantannaimoveis@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] rounded-full p-3 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#BC6C25] mb-1 group-hover:text-[#DDA15E] transition-colors duration-300">Horário de Atendimento</h4>
                  <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-300">Sábado: 9h às 13h</p>
                </div>
              </div>
            </div>

            {/* Instagram apenas */}
            <div className="mt-8">
              <h4 className="font-semibold text-[#BC6C25] mb-4">Siga no Instagram</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/corretorawanessateixeira?igsh=MXQ1ZmVveGZ2YzcxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] text-white p-3 rounded-full hover:from-[#A55A1F] hover:to-[#BC6C25] transition-all duration-300 hover:scale-110 shadow-lg shadow-[#BC6C25]/30"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                @corretorawanessateixeira
              </p>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className={`bg-gradient-to-br from-black/50 to-[#BC6C25]/5 rounded-2xl p-8 border border-[#BC6C25]/20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-libre-baskerville)' }}>
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-[#BC6C25]/30 rounded-lg focus:ring-2 focus:ring-[#BC6C25] focus:border-transparent transition text-white placeholder-gray-400"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-[#BC6C25]/30 rounded-lg focus:ring-2 focus:ring-[#BC6C25] focus:border-transparent transition text-white placeholder-gray-400"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-[#BC6C25]/30 rounded-lg focus:ring-2 focus:ring-[#BC6C25] focus:border-transparent transition text-white placeholder-gray-400"
                    placeholder="(27) 99875-8035"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-[#BC6C25]/30 rounded-lg focus:ring-2 focus:ring-[#BC6C25] focus:border-transparent transition text-white"
                  >
                    <option value="" className="text-gray-400">Selecione um assunto</option>
                    <option value="compra" className="text-black">Compra de Imóvel</option>
                    <option value="venda" className="text-black">Venda de Imóvel</option>
                    <option value="locacao" className="text-black">Locação</option>
                    <option value="avaliacao" className="text-black">Avaliação</option>
                    <option value="outro" className="text-black">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/30 border border-[#BC6C25]/30 rounded-lg focus:ring-2 focus:ring-[#BC6C25] focus:border-transparent transition text-white placeholder-gray-400"
                  placeholder="Descreva sua necessidade..."
                />
              </div>

              <button
                type="submit"
                className="w-full group relative overflow-hidden bg-gradient-to-r from-[#BC6C25] to-[#DDA15E] text-white py-3 rounded-lg font-medium hover:from-[#A55A1F] hover:to-[#BC6C25] transition-all duration-500 shadow-lg shadow-[#BC6C25]/30 hover:shadow-[#BC6C25]/50 border border-[#BC6C25]/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10">Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}