/**
 * Created by Germo on 17/04/2017.
 */
import React, {Component} from 'react';
import GameLogic from './NumberGameLogic';


/**
 * @return {number}
 */
const RandomInt = () => {
    return (
        Math.floor(Math.random() * 9) + 1
    )
};

let checkNumbers = (answer, guess) => {
    if (guess > answer) {
        return {value: guess, correct: false, text: "is BIGGER than correct answer"}

    } else if (guess < answer) {
        return {value: guess, correct: false, text: "is SMALLER than correct answer"}

    } else {
        return {value: guess, correct: true, text: "is CORRECT answer"}
    }
};

const ColoredList = (prevGuess) => {
    let output = prevGuess.correct ?
        <span style={{color: "green"}}>
      {prevGuess.value} {prevGuess.text}
    </span> :
        <span style={{color: "red"}}>
      {prevGuess.value} {prevGuess.text}
    </span>;
    return <p key={prevGuess.value}>{output}</p>
};

const FinalGuess = (props) => {
    console.log("asd");
    console.log(props.final);
    if (props.final) {
        return <h2> you won</h2>
    } else {
        console.log("2");
        return (
            <input
                type="text"
                value={props.guess}
                onChange={this.handleGuessChange.bind(this)}
                onKeyPress={this.handelKeyPress.bind(this)}
            />
        )
    }
};

class NumberGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: props.answer ||  RandomInt(),
            guess: "",
            previousGuesses: [],
            final: false

        }
    }

    handleGuessChange(event) {
        this.setState(
            {guess: event.target.value}
        );
    }

    handelKeyPress(event) {
        if (event.charCode === 13) {
            const currentGuess = checkNumbers(this.state.answer, this.state.guess);
            this.setState({
                previousGuesses: [currentGuess, ...this.state.previousGuesses],
                final: currentGuess.correct,
                guess: ""
            });
        }
    }

    render() {
        return (
            <div>
                <h2> Guess a number between 1-9 </h2>
                {
                    this.state.final ?
                        <h2>YOU WON!</h2> :
                        <input
                            type="text"
                            value={this.state.guess}
                            onChange={this.handleGuessChange.bind(this)}
                            onKeyPress={this.handelKeyPress.bind(this)}
                        />
                }
                <div>
                    {
                        this.state.previousGuesses.map((prevGuess) => {
                            return ColoredList(prevGuess)
                        })
                    }
                </div>
            </div>
        )
    }
}
export default NumberGame;
//