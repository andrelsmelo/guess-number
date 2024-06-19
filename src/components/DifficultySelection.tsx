import { FC } from 'react';
import Button from './Button';

interface Props {
    startGame: (selectedDifficulty: string) => void;
}

const DifficultySelection: FC<Props> = ({ startGame }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-8 md:gap-16'>
            <h1 className="text-5xl text-center">Acerte o número entre 1 a 100</h1>
            <div className='flex flex-col items-center'>
                <h4>Pontuações de Ranking</h4>
                <span className='text-xs'>Fácil: 5 pontos</span>
                <span className='text-xs'>Médio: 10 pontos</span>
                <span className='text-xs'>Difícil: 25 pontos</span>
                <span className='text-xs'>Pesadelo: 50 pontos</span>
                <span className='text-xs'>Inferno: 100 pontos</span>
            </div>
            <h2 className="text-2xl mb-4">Escolha a dificuldade do jogo</h2>
            <div className="flex space-x-4 justify-around">
                <Button variant="info" onClick={() => startGame('f')}>Fácil 😊</Button>
                <Button variant="success" onClick={() => startGame('m')}>Médio 😅</Button>
                <Button variant="danger" onClick={() => startGame('d')}>Difícil 💀</Button>
                <Button variant="error" onClick={() => startGame('p')}>Pesadelo 😈</Button>
                <Button variant="black" onClick={() => startGame('i')}>Inferno 🔥</Button>
            </div>
        </div>
    );
};

export default DifficultySelection;
