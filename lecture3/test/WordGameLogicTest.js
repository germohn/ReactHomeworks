import WordGame from '../src/components/WordGameLogic';

describe('GuessWord', () => {
    let game;
    beforeEach(() => {
        game = new WordGame('paper');
    });

    it('reports correct letters but incorrect guess for substring guess', () => {
        const move = game.guess('pape');
        expect(move).to.eql({
            guess: 'pape',
            correct: false,
            matchedLetters: [['p', true], ['a', true], ['p', true], ['e', true]]
        });
    });
    it('reports correct letters and correct guess, how it should be', () => {
        const move = game.guess('paper');
        expect(move).to.eql({
            guess: 'paper',
            correct:true,
            matchedLetters: [['p', true], ['a', true], ['p', true], ['e', true],['r', true]]
        });
    });
});