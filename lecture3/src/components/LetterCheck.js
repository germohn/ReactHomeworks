/**
 * Created by Germo on 17/04/2017.
 */
import React from 'react'

const LetterCheck = (props) => {
    const letterArray = props.matchedLetters.map((letter, index) => {
        if (letter[1] === true) {
            return (
                <span style={{color: "green"}} key={index}>
                {letter[0]}
            </span>
            )
        } else {
            return (
                <span style={{color: "red"}} key={index}>
                {letter[0]}
            </span>
            )
        }
    });
    return (
        <p>
            {letterArray}
        </p>
    );
};

export default LetterCheck;