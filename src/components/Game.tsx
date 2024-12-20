'use client'

import { useEffect, useState } from 'react'
import DifficultySelection from '@/components/DifficultySelection'
import Gameplay from '@/components/Gameplay'
import Button from './Button'
import { GameMessages } from '@/utils/messages'
import { sendScore } from '@/utils/api'
import { Bounce, toast } from 'react-toastify'
import Link from 'next/link'
import Image from 'next/image'

const Game = () => {
  const [difficulty, setDifficulty] = useState<string>('')
  const [chances, setChances] = useState<number>(0)
  const [guess, setGuess] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [targetNumber, setTargetNumber] = useState<number>(0)
  const [attempts, setAttempts] = useState<number>(0)
  const [gameLost, setGameLost] = useState<boolean>(false)
  const [winnerWinnerChickenDinner, setWinnerWinnerChickenDinner] =
    useState<boolean>(false)

  useEffect(() => {
    const loggedUser = sessionStorage.getItem('username')

    if (loggedUser) return
  }, [])

  const startGame = (selectedDifficulty: string) => {
    const rounds = {
      f: 15,
      m: 12,
      d: 7,
      p: 3,
      i: 1,
    }[selectedDifficulty]

    if (rounds) {
      setDifficulty(selectedDifficulty)
      setChances(rounds)
      setTargetNumber(Math.floor(Math.random() * 100) + 1)
      setAttempts(0)
      setMessage('')
      setGuess('')
    }
  }

  const handleSendScore = async (user: string, difficulty: string) => {
    await sendScore(user, difficulty)
  }

  const handleGuess = () => {
    const guessInt = parseInt(guess)
    setGuess('')

    if (isNaN(guessInt) || guessInt < 1 || guessInt > 100) {
      setMessage(GameMessages.Invalido)
      return
    }

    setAttempts((prev) => prev + 1)
    if (guessInt === targetNumber) {
      setMessage(GameMessages.Parabens)
      setWinnerWinnerChickenDinner(true)
      const usuarioLogado = sessionStorage.getItem('username')
      if (usuarioLogado) {
        handleSendScore(usuarioLogado, difficulty)
      }
    } else if (attempts + 1 >= chances) {
      setMessage(`${GameMessages.Perdeu} ${targetNumber}`)
      setGameLost(true)
    } else {
      setMessage(
        guessInt < targetNumber ? GameMessages.Baixo : GameMessages.Alto,
      )
    }
  }

  const messageHandler = (newMessage: string) => {
    setMessage(newMessage)
  }

  const resetGame = () => {
    setDifficulty('')
    setChances(0)
    setGuess('')
    setMessage('')
    setTargetNumber(0)
    setAttempts(0)
    setGameLost(false)
    setWinnerWinnerChickenDinner(false)
  }

  return (
    <div className="flex flex-col items-center justify-start gap-16 pt-48 md:pt-0 md:justify-evenly min-h-screen bg-black text-white">
      {!difficulty ? (
        <DifficultySelection startGame={startGame} />
      ) : (
        <>
          {winnerWinnerChickenDinner ? (
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl">
                {message} O número era {targetNumber}{' '}
                <Link href="/xablau" className="opacity-10">
                  <span className="text-[8px] text-white">segredo</span>
                </Link>
              </h2>
              <div className="flex w-screen justify-center items-center">
                <Image
                  src="/cat.png"
                  alt="Gato comemorando"
                  width={300}
                  height={300}
                />
              </div>
              <Button variant="primary" className="mt-4" onClick={resetGame}>
                Reiniciar Jogo
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Gameplay
                attempts={attempts}
                chances={chances}
                guess={guess}
                message={message}
                handleGuess={handleGuess}
                setGuess={setGuess}
                gameLost={gameLost}
                messageHandler={messageHandler}
                resetGameHandler={resetGame}
              />
              <Button variant="primary" className="mt-4" onClick={resetGame}>
                Reiniciar Jogo
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Game
