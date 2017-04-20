/**
 * Created by Germo on 18/04/2017.
 */
import React from 'react';
import NumberGame from '../src/components/NumberGame'
import {shallow,mount} from "enzyme";

describe('NumberGame', () => {


    it("has input field and simulate wrong answer input", () => {
        const wrapper = shallow(<NumberGame/>);
        const input = wrapper.find('input');
        expect(input).to.have.length(1);
        input.simulate('change', {target: {value: 5}});
        expect(wrapper.state().guess).to.eql(5);
        input.simulate('keypress', {charCode: 13});

        expect(wrapper.state().final).to.eql(false);
    });

    it("correct answer gives output true", () => {
        const wrapper = shallow(<NumberGame answer={3}/>);
        const input = wrapper.find('input');

        input.simulate('change', {target: {value: 5}});
        expect(wrapper.state().guess).to.eql(5);
        input.simulate('keypress', {charCode: 13});
        expect(wrapper.state().guess).to.eql('');

        input.simulate('change', {target: {value: 3}});
        expect(wrapper.state().guess).to.eql(3);
        input.simulate('keypress', {charCode: 13});
        expect(wrapper.state().guess).to.eql('');

        expect(wrapper.state().final).to.eql(true);
    });

    it("simulate simulate previous guesses, and check state before and after keyPressHandle (3 wrong guesses)", () => {
        const wrapper = shallow(<NumberGame answer={3}/>);
        const input = wrapper.find('input');

        expect(wrapper.state().answer).to.eql(3);
        expect(input).to.have.length(1);

        input.simulate('change', {target: {value: 7}});
        expect(wrapper.state().guess).to.eql(7);
        input.simulate('keypress', {charCode: 13});
        expect(wrapper.state().guess).to.eql('');

        input.simulate('change', {target: {value: 5}});
        expect(wrapper.state().guess).to.eql(5);
        input.simulate('keypress', {charCode: 13});
        expect(wrapper.state().guess).to.eql('');

        input.simulate('change', {target: {value: 4}});
        expect(wrapper.state().guess).to.eql(4);
        input.simulate('keypress', {charCode: 13});
        expect(wrapper.state().guess).to.eql('');

        expect(wrapper.state().previousGuesses).to.have.length(3);
        expect(wrapper.state().final).to.eql(false);
    })
});