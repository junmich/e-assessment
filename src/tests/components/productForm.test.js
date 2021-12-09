import React from 'react';
import { render } from 'enzyme';
import ProductForm from '../../components/ProductForm';

describe('Product Form Test', () => {
    const handleCreateUpdateProduct = jest.fn();
    const backButton = jest.fn();
    test('should render product form correctly', () => {
        const wrapper = render(<ProductForm handleCreateUpdateProduct={handleCreateUpdateProduct} backButton={backButton} />);
        expect(wrapper.find('.product-form__input').length).toBe(1);
        expect(wrapper.find('.default-button').length).toBe(1);
        expect(wrapper.find('.delete-button').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
});

