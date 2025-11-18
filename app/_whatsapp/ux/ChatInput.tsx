import { useState } from 'react'
import { FormData } from '../components/WhatsAppChat'

interface ChatInputProps {
  config: { placeholder: string; field: keyof FormData } | null
  formData: FormData
  onInputChange: (field: keyof FormData, value: string) => void
  onSubmit: (value: string) => void
  onViewProperties?: () => void
  buttonText: string
  showViewPropertiesButton?: boolean
}

export default function ChatInput({ 
  config, 
  formData, 
  onInputChange, 
  onSubmit, 
  onViewProperties,
  buttonText, 
  showViewPropertiesButton = false 
}: ChatInputProps) {
  const [value, setValue] = useState('')

  if (!config) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim()) {
      onInputChange(config.field, value)
      onSubmit(value)
      setValue('')
    }
  }

  const isDisabled = !value.trim()

  return (
    <div className="p-4 space-y-3">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={config.placeholder}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400 pr-24"
            autoFocus
          />
          <button
            type="submit"
            disabled={isDisabled}
            className={`
              absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 rounded-lg font-semibold text-sm transition-all duration-300
              ${isDisabled
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 active:scale-95'
              }
            `}
          >
            {buttonText}
          </button>
        </div>
      </form>

      {/* Botão para ver propriedades */}
      {showViewPropertiesButton && onViewProperties && (
        <button
          onClick={onViewProperties}
          className="w-full flex items-center justify-center space-x-2 py-3 px-4 border-2 border-[#25D366] text-[#25D366] rounded-xl font-semibold hover:bg-[#25D366] hover:text-white transition-all duration-300 group active:scale-95"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span>Ver Todos os Imóveis</span>
        </button>
      )}
    </div>
  )
}