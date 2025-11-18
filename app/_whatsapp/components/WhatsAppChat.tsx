'use client'

import { useState, useEffect, useRef } from 'react'
import ChatHeader from '../ux/ChatHeader'
import ChatMessages from '../ux/ChatMessages'
import ChatInput from '../ux/ChatInput'
import QuickActions from '../ux/QuickActions'
import ConfirmationStep from '../ux/ConfirmationStep'

interface WhatsAppChatProps {
  onClose: () => void
}

export interface ChatMessage {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export interface FormData {
  name: string
  phone: string
  email: string
  propertyRef: string
  message: string
}

export type Step = 'welcome' | 'name' | 'phone' | 'email' | 'property' | 'confirmation'

export default function WhatsAppChat({ onClose }: WhatsAppChatProps) {
  const [currentStep, setCurrentStep] = useState<Step>('welcome')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    propertyRef: '',
    message: 'Olá, gostaria de mais informações sobre os imóveis!'
  })
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Mensagem inicial
  useEffect(() => {
    if (messages.length === 0) {
      setTimeout(() => {
        addBotMessage('Olá! Sou a Wanessa Teixeira 🏡\n\nComo posso ajudá-lo(a) hoje?')
      }, 800)
    }
  }, [])

  // Scroll automático
  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const addBotMessage = (text: string) => {
    setIsTyping(true)
    setTimeout(() => {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, newMessage])
      setIsTyping(false)
    }, 1200)
  }

  const addUserMessage = (text: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleQuickAction = (action: string) => {
    addUserMessage(action)
    
    switch (action) {
      case '📋 Ver Imóveis':
        setCurrentStep('property')
        setTimeout(() => {
          addBotMessage('Ótimo! Temos várias opções.\n\nVocê sabe o código do imóvel que te interessou? Se sim, digite aqui. Se não, pode clicar em "Ver Todos os Imóveis" para explorar nossa lista completa! 🏘️')
        }, 1000)
        break
      case '💬 Falar com Corretor':
        setCurrentStep('name')
        setTimeout(() => {
          addBotMessage('Perfeito! Vamos conversar.\n\nQual é o seu nome?')
        }, 1000)
        break
      case '📅 Agendar Visita':
        setCurrentStep('name')
        setTimeout(() => {
          addBotMessage('Excelente! Vamos agendar sua visita.\n\nComece me dizendo seu nome:')
        }, 1000)
        break
    }
  }

  const handleFormSubmit = (value: string) => {
    switch (currentStep) {
      case 'property':
        if (value.trim()) {
          addUserMessage(`Código: ${value}`)
          setCurrentStep('name')
          setTimeout(() => {
            addBotMessage('Anotado! 📝\n\nAgora preciso do seu nome para te enviar todas as informações:')
          }, 1000)
        }
        break
        
      case 'name':
        if (value.trim()) {
          addUserMessage(`Nome: ${value}`)
          setCurrentStep('phone')
          setTimeout(() => {
            addBotMessage(`Prazer, ${value}! 📞\n\nQual é seu telefone com DDD?`)
          }, 1000)
        }
        break
        
      case 'phone':
        if (value.trim()) {
          addUserMessage(`Telefone: ${value}`)
          setCurrentStep('email')
          setTimeout(() => {
            addBotMessage('Obrigada! 📧\n\nQual é seu melhor email?')
          }, 1000)
        }
        break
        
      case 'email':
        if (value.trim()) {
          addUserMessage(`Email: ${value}`)
          setCurrentStep('confirmation')
          setTimeout(() => {
            addBotMessage('✅ Perfeito! Estou preparando tudo para você...')
            setTimeout(() => {
              addBotMessage(`Muito obrigada, ${formData.name}!\n\nTodas as informações estão prontas. Clique em "Abrir WhatsApp" para receber os detalhes completos! 🏡✨`)
            }, 1500)
          }, 1000)
        }
        break
    }
  }

  const handleViewProperties = () => {
    addUserMessage('Quero ver todos os imóveis disponíveis')
    setTimeout(() => {
      addBotMessage('Excelente escolha! 🎯\n\nVou te redirecionar para nossa lista completa de imóveis. Lá você pode filtrar por tipo, preço e localização!')
    }, 800)
    
    // Fechar o modal e redirecionar após um breve delay
    setTimeout(() => {
      onClose()
      // Redirecionar para a seção de imóveis
      const propertiesSection = document.getElementById('imoveis')
      if (propertiesSection) {
        propertiesSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        // Fallback: scroll para o topo se a seção não existir
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 2000)
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const getCurrentInputConfig = () => {
    switch (currentStep) {
      case 'property':
        return {
          placeholder: 'Ex: TM2666 (ou deixe em branco)',
          field: 'propertyRef' as keyof FormData,
          showViewPropertiesButton: true
        }
      case 'name':
        return {
          placeholder: 'Seu nome completo',
          field: 'name' as keyof FormData,
          showViewPropertiesButton: false
        }
      case 'phone':
        return {
          placeholder: '(27) 99999-9999',
          field: 'phone' as keyof FormData,
          showViewPropertiesButton: false
        }
      case 'email':
        return {
          placeholder: 'seu@email.com',
          field: 'email' as keyof FormData,
          showViewPropertiesButton: false
        }
      default:
        return null
    }
  }

  const getButtonText = () => {
    switch (currentStep) {
      case 'property': return 'Enviar Código'
      case 'name': return 'Enviar Nome'
      case 'phone': return 'Enviar Telefone'
      case 'email': return 'Enviar Email'
      default: return 'Continuar'
    }
  }

  const config = getCurrentInputConfig()

  return (
    <div className="flex flex-col h-[600px] bg-white">
      {/* Header */}
      <ChatHeader onClose={onClose} />
      
      {/* Messages Area */}
      <div className="flex-1 overflow-hidden">
        <ChatMessages 
          messages={messages}
          isTyping={isTyping}
          messagesEndRef={messagesEndRef}
        />
      </div>

      {/* Interaction Area */}
      <div className="border-t border-gray-100 bg-white">
        {currentStep === 'welcome' && messages.length > 0 && (
          <QuickActions onAction={handleQuickAction} />
        )}

        {(currentStep === 'property' || currentStep === 'name' || currentStep === 'phone' || currentStep === 'email') && config && (
          <ChatInput
            config={config}
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleFormSubmit}
            onViewProperties={handleViewProperties}
            buttonText={getButtonText()}
            showViewPropertiesButton={config.showViewPropertiesButton}
          />
        )}

        {currentStep === 'confirmation' && (
          <ConfirmationStep 
            formData={formData}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  )
}