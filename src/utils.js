import {WORDS} from "./data";

export const sampleAnswer = (previousAnswer) => {
    let nextAnswer = sample((WORDS));
    while (nextAnswer === previousAnswer) {
        nextAnswer = sample(WORDS);
    }

    // To make debugging easier, we'll log the solution in the console.
    console.log({answer: nextAnswer});
    return nextAnswer;
}

export const sample = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === 'undefined') {
        end = start;
        start = 0;
    }
    for (let i = start; i < end; i += step) {
        output.push(i);
    }
    return output;
};
