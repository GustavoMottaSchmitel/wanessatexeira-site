'use client'

import { useState, useEffect, useRef } from 'react'
import WhatsAppChat from './WhatsAppChat'

interface WhatsAppModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}

      <div 
        ref={modalRef}
        className={`
          relative w-full max-w-md transform transition-all duration-300 ease-out
          ${isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4'
          }
        `}
      >
        {/* Close Button */}

        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 z-10 text-white hover:text-gray-200 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
          aria-label="Fechar modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <WhatsAppChat onClose={handleClose} />
        </div>

        {/* Decorative Elements */}

        <div className="absolute -z-10 top-4 -left-4 w-24 h-24 bg-[#25D366]/10 rounded-full blur-xl"></div>
        <div className="absolute -z-10 bottom-4 -right-4 w-32 h-32 bg-[#128C7E]/10 rounded-full blur-xl"></div>
      </div>
    </div>
  )
}