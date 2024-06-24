'use client'
import { useState } from 'react'
import Button from './Button'
import SupportIcon from './icons/Support'

type Message = {
  id: number
  text: string
  response: string
}

const messages: Message[] = [
  {
    id: 1,
    text: 'Problema com login',
    response:
      'Oi André, estava jogando seu jogo e tive um problema com login, pode me ajudar?',
  },
  {
    id: 2,
    text: 'Bug no jogo',
    response:
      'Oi André, estava jogando seu jogo e encontrei um bug, pode me ajudar?',
  },
  {
    id: 3,
    text: 'Dúvida sobre as regras',
    response:
      'Oi André, estava jogando seu jogo e tive uma dúvida sobre as regras, pode me ajudar?',
  },
  {
    id: 4,
    text: 'Tenho uma sugestão',
    response:
      'Oi André, estava jogando seu jogo e tenho uma sugestão, pode me ouvir?',
  },
]

const SupportButton: React.FC = () => {
  const [showMessages, setShowMessages] = useState(false)

  const handleSupportClick = () => {
    setShowMessages(!showMessages)
  }

  const handleMessageClick = (message: Message) => {
    const encodedMessage = encodeURIComponent(message.response)
    window.open(`https://wa.me/+5541987815525?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="fixed bottom-0 left-0">
      {!showMessages && (
        <Button
          variant="transparent"
          onClick={handleSupportClick}
          className="rounded-full"
        >
          <SupportIcon />
        </Button>
      )}
      {showMessages && (
        <div className="mt-2 bg-gray-100 p-6 rounded-tr-lg shadow-lg">
          <span
            className="absolute top-2 right-2 m-0 cursor-pointer hover:scale-105 hover:text-red-400 text-black"
            onClick={() => setShowMessages(false)}
          >
            X
          </span>
          {messages.map((message) => (
            <div key={message.id} className="mb-2">
              <Button
                variant="black"
                onClick={() => handleMessageClick(message)}
                className="p-2 rounded w-full"
              >
                {message.text}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SupportButton
