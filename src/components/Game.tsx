
'use client';

import { useState } from 'react';
import DifficultySelection from '@/components/DifficultySelection';
import Gameplay from '@/components/Gameplay';
import Button from './Button';
import { GameMessages } from '@/utils/messages';

const Game = () => {
    const [difficulty, setDifficulty] = useState<string>('');
    const [chances, setChances] = useState<number>(0);
    const [guess, setGuess] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [targetNumber, setTargetNumber] = useState<number>(0);
    const [attempts, setAttempts] = useState<number>(0);
    const [gameLost, setGameLost] = useState<boolean>(false);
    const [winnerWinnerChickenDinner, setWinnerWinnerChickenDinner] = useState<boolean>(false);

    const startGame = (selectedDifficulty: string) => {
        const rounds = {
            'f': 20,
            'm': 15,
            'd': 10,
            'i': 7
        }[selectedDifficulty];

        if (rounds) {
            setDifficulty(selectedDifficulty);
            setChances(rounds);
            setTargetNumber(Math.floor(Math.random() * 100) + 1);
            setAttempts(0);
            setMessage('');
            setGuess('');
        }
    };

    const handleGuess = () => {
        const guessInt = parseInt(guess);
        if (isNaN(guessInt)) {
            setMessage(GameMessages.Invalido);
            return;
        }

        setAttempts(prev => prev + 1);
        if (guessInt === targetNumber) {
            setMessage(GameMessages.Parabens);
            setWinnerWinnerChickenDinner(true);
        } else if (attempts + 1 >= chances) {
            setMessage(`${GameMessages.Perdeu} ${targetNumber}`);
            setGameLost(true);
        } else {
            setMessage(guessInt < targetNumber ? GameMessages.Baixo : GameMessages.Alto);
        }
    };

    const messageHandler = (newMessage: string) => {
        setMessage(newMessage);
    };

    const resetGame = () => {
        setDifficulty('');
        setChances(0);
        setGuess('');
        setMessage('');
        setTargetNumber(0);
        setAttempts(0);
        setGameLost(false);
        setWinnerWinnerChickenDinner(false);
    };

    return (
        <div className="flex flex-col items-center justify-evenly min-h-screen bg-black text-white">
            <h1 className="text-5xl">Acerte o número entre 1 a 100</h1>
            {!difficulty ? (
                <DifficultySelection startGame={startGame} />
            ) : (
                <>
                    {winnerWinnerChickenDinner && (
                        <div className='flex flex-col justify-center items-center'>
                            <h2 className="text-3xl">{message} O número era {targetNumber}</h2>
                            <div className='flex'>
                                <div className="tenor-gif-embed" data-postid="20285627" data-share-method="host" data-aspect-ratio="1.77778" data-width="600px"><a href="https://tenor.com/view/yba-winning-comp-sbr-winning-sbr-gif-20285627">Yba Winning Comp Sbr Sticker</a>from <a href="https://tenor.com/search/yba-stickers">Yba Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                            </div>

                        </div>
                    )}
                    <div className='flex flex-col items-center justify-center'>
                        <Gameplay
                            attempts={attempts}
                            chances={chances}
                            guess={guess}
                            message={message}
                            handleGuess={handleGuess}
                            setGuess={setGuess}
                            gameLost={gameLost}
                            messageHandler={messageHandler}
                        />
                        <Button variant="primary" className="mt-4" onClick={resetGame}>Reiniciar Jogo</Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Game;