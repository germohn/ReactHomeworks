/**
 * Created by Germo on 17/04/2017.
 */
import React, {Component} from 'react'
import InputChangesOnSubmit from '../components/InputChangesOnSubmit'
import WordHistory from '../components/WordHistory'


class WordGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevGuesses: [],
            gameOver: false
        };
        this.onGuess = this.onGuess.bind(this);
    }

    onGuess(guess) {
        const currentResult = this.props.game.guess(guess);
        if (currentResult.correct) {
            this.setState({
                prevGuesses: [currentResult, ...this.state.prevGuesses],
                gameOver: true
            })
        } else {
            this.setState({
                prevGuesses: [currentResult, ...this.state.prevGuesses],
                gameOver: false
            })
        }
    }

    render() {
        debugger;
        if (this.state.gameOver === true) {
            return (
                <div>
                    <h2>Guess a 5 letter word</h2>
                    <h2>You Won</h2>
                    <WordHistory words={this.state.prevGuesses}/>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Guess a 5 letter word</h2>
                    <InputChangesOnSubmit onSubmit={this.onGuess} type="text"/>
                    <WordHistory words={this.state.prevGuesses}/>
                </div>
            )
        }
    }
}
export default WordGame;