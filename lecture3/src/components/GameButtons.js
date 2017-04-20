/**
 * Created by Germo on 17/04/2017.
 */
import  React, {Component} from 'react'
import NumberGame from '../components/NumberGame'
import WordGame from '../components/WordGame'
import WordGameLogic from '../components/WordGameLogic'

class GameButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
        this.handleWordGameButton = this.handleWordGameButton.bind(this);
        this.handleNumberGameButton = this.handleNumberGameButton.bind(this)
    }

    handleWordGameButton(event) {
        this.setState({
            games: [<WordGame game={WordGameLogic.generate()} key={this.state.games.length}/>, ...this.state.games]
        })

    }

    handleNumberGameButton() {
        this.setState({
            // games:this.state.games.concat(<NumberGame key={this.state.games.length}/> ),
            games: [<NumberGame key={this.state.games.length}/>, ...this.state.games]
        });
    }

    render() {
        // console.log(this.state.games);
        return (
            <div>
                <button id="wordGame" onClick={this.handleWordGameButton}>Word Game</button>
                <button id="numberGame" onClick={this.handleNumberGameButton}>Number Game</button>
                <div>
                    {this.state.games}
                </div>
            </div>
        )
    }
}

export default GameButtons