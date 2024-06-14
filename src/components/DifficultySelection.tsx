import { FC } from 'react';
import Button from './Button';

interface Props {
    startGame: (selectedDifficulty: string) => void;
}

const DifficultySelection: FC<Props> = ({ startGame }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className="text-2xl mb-4">Escolha a dificuldade do jogo</h2>
            <div className="flex space-x-4 justify-around">
                <Button variant="info" onClick={() => startGame('f')}>Fácil</Button>
                <Button variant="success" onClick={() => startGame('m')}>Médio</Button>
                <Button variant="danger" onClick={() => startGame('d')}>Difícil</Button>
                <Button variant="error" onClick={() => startGame('i')}>Impossível</Button>
            </div>
        </div>
    );
};

export default DifficultySelection;
