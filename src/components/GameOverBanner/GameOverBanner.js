import React from 'react';

function GameOverBanner({outcome, totalGuesses, answer}) {
    if (!['win', 'lose'].includes(outcome)) {
        return undefined;
    }
    const className = `${outcome === 'win' ? 'happy' : 'sad'} banner`;

    return (
        <div className={className}>
            {outcome === 'win' ?
                <p><strong>Congratulations!</strong> Got it in <strong>{totalGuesses} guesses</strong></p> :
                <p>Sorry, the correct answer is <strong>{answer}</strong></p>
            }
        </div>
    );
}

export default GameOverBanner;
