/**
 * Created by Germo on 18/04/2017.
 */
import React from 'react'
import LetterCheck from './LetterCheck'

const Word = (props) => {

    return (
        <div>
            <LetterCheck
                guess={props.guess}
                matchedLetters={props.matchedLetters}

            />
        </div>
    )

};


export default Word