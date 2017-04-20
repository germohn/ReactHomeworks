/**
 * Created by Germo on 20/04/2017.
 */
import React from 'react';
import {render} from 'enzyme';

import Word from '../src/components/Word'

describe('Word', () => {
    it('renders correct words ', () => {
        const wrapper = render(
            <Word
                guess="paper"
                matchedLetters={[['p', true], ['a', true], ['p', true], ['e', true], ['r', true]]}
            />
        );
       expect(wrapper.html()).to.eql(
           '<div>'+
               '<p>'+
                   '<span style="color:green;">p</span>'+
                   '<span style="color:green;">a</span>'+
                   '<span style="color:green;">p</span>'+
                   '<span style="color:green;">e</span>'+
                   '<span style="color:green;">r</span>'+
               '</p>'+
           '</div>'
       )
    });
    it('renders incorrect words ', () => {
        const wrapper = render(
            <Word
                guess="peper"
                matchedLetters={[['p', true], ['e', false], ['p', true], ['e', true], ['r', true]]}
            />
        );
        expect(wrapper.html()).to.eql(
            '<div>'+
            '<p>'+
            '<span style="color:green;">p</span>'+
            '<span style="color:red;">e</span>'+
            '<span style="color:green;">p</span>'+
            '<span style="color:green;">e</span>'+
            '<span style="color:green;">r</span>'+
            '</p>'+
            '</div>'
        )
    })
});