interface QuickActionsProps {
  onAction: (action: string) => void
}

const quickActions = [
  {
    icon: '📋',
    title: 'Ver Imóveis',
    description: 'Conheça nossas opções'
  },
  {
    icon: '💬',
    title: 'Falar com Corretor',
    description: 'Tire suas dúvidas'
  },
  {
    icon: '📅',
    title: 'Agendar Visita',
    description: 'Visite o imóvel'
  }
]

export default function QuickActions({ onAction }: QuickActionsProps) {
  return (
    <div className="p-4">
      <p className="text-xs text-gray-500 text-center mb-4 font-medium">
        Como posso te ajudar hoje?
      </p>
      <div className="grid gap-3">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={() => onAction(`${action.icon} ${action.title}`)}
            className="flex items-center space-x-4 w-full p-4 bg-white border border-gray-200 rounded-2xl hover:border-[#25D366]/40 hover:bg-gray-50/50 transition-all duration-300 group text-left active:scale-95"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:from-[#25D366]/5 group-hover:to-[#128C7E]/5 transition-all duration-300">
              <span className="text-2xl">{action.icon}</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">
                {action.title}
              </h4>
              <p className="text-xs text-gray-500 group-hover:text-gray-600 mt-0.5">
                {action.description}
              </p>
            </div>
            <div className="flex-shrink-0 text-gray-300 group-hover:text-[#25D366] transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}