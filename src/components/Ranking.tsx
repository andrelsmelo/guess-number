'use client'
import { getRanking } from '@/utils/api'
import { useEffect, useState } from 'react'
import Button from './Button'
import { motion, AnimatePresence } from 'framer-motion'
import { TrophyIcon } from './icons/Trophy'

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
        <Button variant="transparent" className="m-1" onClick={toggleModal}>
          <TrophyIcon />
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
