'use client'
import { getRanking } from '@/utils/api'
import { useEffect, useState } from 'react'
import Button from './Button'
import { motion, AnimatePresence } from 'framer-motion'

interface RankingData {
  username: string
  qtd: number
}

export default function Ranking() {
  const [isOpen, setIsOpen] = useState(false)
  const [rows, setRows] = useState<RankingData[]>([])

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    async function getData() {
      const data = await getRanking()
      const transformedData = data.data!.map((item) => ({
        username: item.username,
        qtd: item.qtd,
      }))
      setRows(transformedData)
    }
    getData()
  }, [])

  return (
    <div className="fixed top-0 left-0">
      {!isOpen && (
        <Button variant="secondary" className="m-1" onClick={toggleModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-6 h-6"
          >
            <rect width="256" height="256" fill="none" />
            <path
              d="M32,208V104a8,8,0,0,1,8-8H88"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M88,208V56a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8V208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M224,208V144a8,8,0,0,0-8-8H168"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <polyline
              points="120 100 132 96 132 136"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="16"
              y1="208"
              x2="240"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
        </Button>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 bg-white text-black p-4 h-2/3 flex flex-col justify-start items-center rounded-br-lg shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mb-8">Ranking</h2>
            <ol className="overflow-y-scroll">
              {rows.map((row) => (
                <li key={row.username}>
                  {row.username}: {row.qtd}
                </li>
              ))}
            </ol>
            <span
              className="absolute top-2 right-2 m-0 cursor-pointer hover:scale-105 hover:text-red-400"
              onClick={toggleModal}
            >
              X
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
