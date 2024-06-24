'use client'

import Button from '@/components/Button'
import { useState } from 'react'
import QuestionIcon from './icons/Question'

const Never = () => {
  const [iframe, setIframe] = useState(false)
  const [videoSrc, setVideoSrc] = useState('')

  const videoLinks = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    'https://www.youtube.com/embed/iSGO--JdAUA?si=Y7DmKXxq33IZN5cu?autoplay=1',
    'https://www.youtube.com/embed/cZz1oamNbng?autoplay=1',
    'https://www.youtube.com/embed/lu60aeS8HME?autoplay=1',
    'https://www.youtube.com/embed/KnHmoA6Op1o?autoplay=1',
    'https://www.youtube.com/embed/EnTZTRFHmUo?autoplay=1',
    'https://www.youtube.com/embed/D-UmfqFjpl0?autoplay=1',
  ]

  const getRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * videoLinks.length)
    return videoLinks[randomIndex]
  }

  const handleClick = () => {
    setVideoSrc(getRandomVideo())
    setIframe(true)
  }

  return (
    <main className="relative">
      <Button
        variant="transparent"
        className="fixed right-0 top-0 bg-transparent hover:bg-transparent hover:scale-125"
        onClick={handleClick}
      >
        <QuestionIcon />
      </Button>
      {iframe && (
        <iframe
          className="fixed inset-0 w-full h-full bg-black z-50"
          src={videoSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </main>
  )
}

export default Never
