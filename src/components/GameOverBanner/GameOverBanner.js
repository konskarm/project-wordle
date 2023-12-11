import React from 'react';
import RestartSVG from '../../assets/restart.svg';

function GameOverBanner({outcome, totalGuesses, answer, restartGame}) {
    if (!['win', 'lose'].includes(outcome)) {
        return undefined;
    }
    const className = `${outcome === 'win' ? 'happy' : 'sad'} banner`;

    return (
        <div className={className}>
            {outcome === 'win' ?
                <><strong>Congratulations!</strong> Got it in <strong>{totalGuesses} guesses</strong></> :
                <>Sorry, the correct answer is <strong>{answer}</strong></>
            }
            <button onClick={restartGame}>
                <img src={RestartSVG} alt="Restart Game"/>
            </button>
        </div>
    );
}

export default GameOverBanner;
