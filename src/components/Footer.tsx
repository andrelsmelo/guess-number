'use client'
import { useState } from 'react'

const Footer = () => {
  const [hover, setHover] = useState(false)

  return (
    <footer className="py-4 text-center flex flex-col justify-center">
      <p>&copy; {new Date().getFullYear()} - André Melo</p>
      <p>
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
          .
        </a>
        <a
          href="https://github.com/andrelsmelo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 ml-2"
        >
          <i className="fab fa-github"></i>
        </a>
      </p>
    </footer>
  )
}

export default Footer
