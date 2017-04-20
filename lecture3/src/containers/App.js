import React, {Component} from 'react';
import NumberGame from '../components/NumberGame'
import GameButtons from '../components/GameButtons'
import WordGame from '../components/WordGame'
import WordGameLogic from '../components/WordGameLogic'

class App extends Component {

    render() {
        return (
            <div>
                <h1>Guessing games</h1>
                <GameButtons/>

            </div>
        );
    }
}


export default App ;
