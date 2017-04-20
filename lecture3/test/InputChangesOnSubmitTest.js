/**
 * Created by Germo on 18/04/2017.
 */
import React from 'react';
import {shallow} from 'enzyme';

import InputChangesOnSubmit from '../src/components/InputChangesOnSubmit'
import * as sinon from "sinon";

describe('InputChangesOnSubmit', () => {
    it('calls onSubmit and clears input field when you press enter', () => {
        const onSubmit = sinon.stub();
        const result = shallow(<InputChangesOnSubmit onSubmit={onSubmit} type="text"/>);
        expect(result.find('input')).to.have.length(1);
        const input = result.find('input');
        input.simulate('change', {target: {value: 'foo'}});
        input.simulate('keyup', {keyCode: 13});
        expect(onSubmit).to.have.been.calledWith('foo');
    })
})