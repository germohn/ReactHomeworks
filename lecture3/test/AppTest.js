/**
 * Created by Germo on 20/04/2017.
 */
import 'jsdom-global/register';
import React from 'react';
import {mount} from 'enzyme';

import App from '../src/containers/App'
import NumberGame from '../src/components/NumberGame'
import WordGame from "../src/components/WordGame";

describe("App test", () => {
    it("renders on number game when number game button pressed", () => {
        const wrapper = mount(<App/>);
        wrapper.find('#numberGame').simulate('click');
        expect(wrapper).to.have.exactly(1).descendants(NumberGame);
    });

    it("renders on word  game when wordgame button pressed", () => {
        const wrapper = mount(<App/>);
        wrapper.find('#wordGame').simulate('click');
        expect(wrapper).to.have.exactly(1).descendants(WordGame);
    });

    it("renders on both games when both buttons are pressed", () => {
        const wrapper = mount(<App/>);
        wrapper.find('#wordGame').simulate('click');
        wrapper.find('#numberGame').simulate('click');
        expect(wrapper).to.have.exactly(1).descendants(WordGame);
        expect(wrapper).to.have.exactly(1).descendants(NumberGame);

    });
});