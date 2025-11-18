import { RefObject } from 'react'
import { ChatMessage } from '../components/WhatsAppChat'

interface ChatMessagesProps {
  messages: ChatMessage[]
  isTyping: boolean
  messagesEndRef: RefObject<HTMLDivElement | null>
}

export default function ChatMessages({ messages, isTyping, messagesEndRef }: ChatMessagesProps) {
  return (
    <div className="h-full overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50/50 to-white">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 ${
              message.isUser
                ? 'bg-gradient-to-r from-[#DCF8C6] to-[#B9F4BC] rounded-br-none border border-[#B9F4BC]'
                : 'bg-white border border-gray-100 rounded-bl-none shadow-xs'
            }`}
          >
            <p className="text-sm whitespace-pre-line text-gray-800 leading-relaxed">
              {message.text}
            </p>
            <p className={`text-xs mt-2 ${
              message.isUser ? 'text-gray-600 text-right' : 'text-gray-500'
            }`}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="flex justify-start">
          <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-xs">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span className="text-xs text-gray-500">Digitando...</span>
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  )
}