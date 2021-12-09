import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header Test', () => {
    test('should render header correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.header-title').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
    test('should render header with title', () => {
        const title = "My App";
        const wrapper = shallow(<Header title={title}/>);
        expect(wrapper.find('.header-title').length).toBe(1);
        expect(wrapper.find('.header-title').text()).toBe(title);
        expect(wrapper).toMatchSnapshot();
    });
});

