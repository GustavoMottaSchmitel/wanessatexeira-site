interface ChatHeaderProps {
  onClose: () => void
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="relative">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
            </div>
            {/* Status online */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-white font-bold text-base">Wanessa Teixeira</h3>
            <p className="text-white/90 text-sm">Corretora de Imóveis</p>
            <div className="flex items-center space-x-1 mt-0.5">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              <p className="text-white/70 text-xs">Online agora</p>
            </div>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-xl hover:bg-white/10"
          aria-label="Fechar chat"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}