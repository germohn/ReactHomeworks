/**
 * Created by Germo on 18/04/2017.
 */
import React from 'react';
import {shallow} from 'enzyme';

import GameButtons from '../src/components/GameButtons'
import WordGame from "../src/components/WordGame";
import NumberGame from "../src/components/NumberGame";

describe('GameButtons ', () => {
    it('simulate wordGame button is clicked, adds 1 wordGame to games array', () => {
        const wrapper = shallow(<GameButtons/>);
        const wordGameButton = wrapper.find('#wordGame');
        const numberGameButton = wrapper.find('#numberGame');
        expect(wrapper.state().games).to.have.length(0);
        expect(wordGameButton).to.have.length(1);
        expect(numberGameButton).to.have.length(1);
        expect(wrapper.find("button")).to.have.length(2);

        wordGameButton.simulate('click');
        expect(wrapper.state().games).to.have.length(1);
    });

    it('simulate numberGame button is clicked, adds 1 wordGame to games array', () => {
        const wrapper = shallow(<GameButtons/>);
        const wordGameButton = wrapper.find('#wordGame');
        const numberGameButton = wrapper.find('#numberGame');
        expect(wrapper.state().games).to.have.length(0);
        expect(wordGameButton).to.have.length(1);
        expect(numberGameButton).to.have.length(1);
        expect(wrapper.find("button")).to.have.length(2);

        numberGameButton.simulate('click');
        expect(wrapper.state().games).to.have.length(1);
    });

    it('simulate adding to games to array, so that the later one is in the beginning of array', () => {
        const wrapper = shallow(<GameButtons/>);
        const wordGameButton = wrapper.find('#wordGame');
        const numberGameButton = wrapper.find('#numberGame');
        expect(wrapper.state().games).to.have.length(0);


        wordGameButton.simulate('click');
        numberGameButton.simulate('click');

        expect(wrapper.state().games).to.have.length(2);
        expect(wrapper.state().games[0]).to.eql(<NumberGame key={wrapper.state().games.length-1}/>);

    })
});