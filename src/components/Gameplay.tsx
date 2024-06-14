import { Dispatch, FC, SetStateAction, KeyboardEvent, useEffect } from 'react';
import Button from './Button';
import { GameMessages } from '@/utils/messages';
import { Bounce, toast } from 'react-toastify';

interface Props {
    attempts: number;
    chances: number;
    guess: string;
    message: string;
    gameLost: boolean;
    handleGuess: () => void;
    setGuess: Dispatch<SetStateAction<string>>;
    messageHandler: (message: string) => void;
}

const Gameplay: FC<Props> = ({ attempts, chances, guess, message, gameLost, handleGuess, setGuess, messageHandler }) => {

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleGuess();
        }
    };

    const showMessageToast = (message: string) => {
        let toastType;

        if (message.includes(GameMessages.Invalido) || message.includes(GameMessages.Perdeu)) {
            toastType = toast.error;
        } else if (message === GameMessages.Baixo) {
            toastType = toast.warning;
        } else if (message === GameMessages.Alto) {
            toastType = toast.info;
        } else if (message === GameMessages.Parabens) {
            toastType = toast.success;
        }

        if (toastType === undefined) return;

        toastType(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            icon: false
        });
    };

    useEffect(() => {
        if (message) {
            showMessageToast(message);
            messageHandler('');
        }
    }, [message, messageHandler]);

    return (
        <div className="text-center">
            {!gameLost ? (
                <>
                    <p className="text-xl">Rodada: {attempts + 1}</p>
                    <p className="text-xl">Chances restantes: {chances - attempts}</p>
                    <input
                        type="text"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="text-black px-4 py-2 mt-4 rounded-s-lg"
                        placeholder="Digite seu chute"
                    />
                    <Button variant="primary" className="rounded-s-none rounded-e-lg" onClick={handleGuess}>Enviar</Button>
                </>
            ) : (
                <>
                    <div className='flex justify-around'>
                        <div className="tenor-gif-embed" data-postid="13030363029827742033" data-share-method="host" data-aspect-ratio="1" data-width="600px"><a href="https://tenor.com/view/despair-gif-13030363029827742033">Despair Sticker</a>from <a href="https://tenor.com/search/despair-stickers">Despair Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                        <div className="tenor-gif-embed" data-postid="24691555" data-share-method="host" data-aspect-ratio="1" data-width="600px"><a href="https://tenor.com/view/xqc-despair-xqcdespair-voidge-troll-gif-24691555">Xqc Despair GIF</a>from <a href="https://tenor.com/search/xqc-gifs">Xqc GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                    </div>
                </>
            )}
        </div>
    );
};

export default Gameplay;
