/**
 * Created by Germo on 17/04/2017.
 */
import React from 'react'
import Word from './Word'

const WordHistory = (props) => {
    let guessArray = props.words;
    if (guessArray.length === 0) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div>
                {guessArray.map((guessObject, index) => {
                    return (
                        <Word guess={guessObject.guess}
                              correct={guessObject.correct}
                              matchedLetters={guessObject.matchedLetters}
                              wordKey={index}
                              key={index}
                        />
                    )
                })}
            </div>
        )
    }
};

export default WordHistory