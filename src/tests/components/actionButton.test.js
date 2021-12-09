import React from 'react';
import { shallow } from 'enzyme';
import ActionButton from '../../components/ActionButton';

describe('Action Button Test', () => {
    test('should render header correctly', () => {
        const wrapper = shallow(<ActionButton />);
        expect(wrapper.find('.action-button').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
    test('should render header with title', () => {
        const label = "My App";
        const wrapper = shallow(<ActionButton label={label}/>);
        expect(wrapper.find('.action-button').text()).toBe(label);
        expect(wrapper).toMatchSnapshot();
    });
});

