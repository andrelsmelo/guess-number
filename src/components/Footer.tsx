'use client'
import { useState } from 'react'

const Footer = () => {
  const [hover, setHover] = useState(false)

  return (
    <footer className="py-4 text-center flex flex-col justify-center">
      <p>&copy; {new Date().getFullYear()} - André Melo</p>
      <p className="flex items-center justify-center">
        Feito com
        <a
          href="https://www.youtube.com/watch?v=kpnW68Q8ltc&pp=ygUZZG9vbSBhbGwgdGhleSBmZWFyIGlzIHlvdQ%3D%3D"
          target="_blank"
        >
          <span
            role="img"
            aria-label="emoji"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="mx-2 hover:cursor-pointer"
          >
            {hover ? '😈' : '❤️'}
          </span>
        </a>
        <a
          href="https://github.com/andrelsmelo"
          target="_blank"
          rel="noopener noreferrer"
          className="w-4 h-4 hover:cursor-pointer mx-2 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-4 h-4"
          >
            <rect width="256" height="256" fill="none" />
            <path
              d="M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
            <path
              d="M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
            <path
              d="M104,208H72a32,32,0,0,1-32-32A32,32,0,0,0,8,144"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
          </svg>
        </a>
      </p>
    </footer>
  )
}

export default Footer
