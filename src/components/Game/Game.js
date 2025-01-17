import React from 'react';

import {sampleAnswer} from '../../utils';
import GameOverBanner from "../GameOverBanner";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import Keyboard from "../Keyboard";

const initialAnswer = sampleAnswer('');

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [outcome, setOutcome] = React.useState('');
    const [guess, setGuess] = React.useState('');
    const [answer, setAnswer] = React.useState(initialAnswer);

    function restartGame() {
        const nextAnswer = sampleAnswer(answer);
        setAnswer((nextAnswer));
        setGuesses([]);
        setOutcome('');
        setGuess('');
    }

    function checkOutcome(guess, guesses) {
        if (guess === answer && guesses.length <= NUM_OF_GUESSES_ALLOWED) {
            setOutcome('win');
        } else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
            setOutcome('lose');
        }
    }

    function addNewGuess(guess) {
        const nextGuesses = [...guesses];
        nextGuesses.push(guess);
        setGuesses(nextGuesses);
        checkOutcome(guess, nextGuesses);
    }

    return (
        <>
            <GuessResults guesses={guesses} answer={answer}/>
            <GuessInput addNewGuess={addNewGuess} disabled={outcome !== ''} guess={guess} setGuess={setGuess}/>
            <Keyboard currentGuess={guess} setCurrentGuess={setGuess} guesses={guesses} answer={answer}/>
            {['win', 'lose'].includes(outcome) &&
                <GameOverBanner
                    outcome={outcome}
                    totalGuesses={guesses.length}
                    answer={answer}
                    restartGame={restartGame}
                />
            }
        </>
    );
}

export default Game;
