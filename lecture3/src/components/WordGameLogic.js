/**
 * Created by Germo on 17/04/2017.
 */
const answers = ['paper', 'grill', 'basil', 'hinge', 'ruler'];

const selectRandom = (array) => array[Math.floor(Math.random() * array.length)];

class WordGameLogic {

    static generate() {
        return new WordGameLogic(selectRandom(answers))
    }

    constructor(answer) {
        this.answer = answer;

    }

    guess(guessWord) {
        const matchedLetters = [];

        for (let i = 0; i < guessWord.length; i++) {
            const guessLetter = guessWord.charAt(i);
            const letterCorrect = guessLetter === this.answer.charAt(i);
            matchedLetters.push([guessLetter, letterCorrect]);
        }

        const wordCorrect = guessWord === this.answer;
        if (wordCorrect) {
        }

        return {
            correct: wordCorrect,
            matchedLetters: matchedLetters,
            guess: guessWord,
        }
    }
}

export default WordGameLogic