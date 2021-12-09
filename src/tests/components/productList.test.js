import React from 'react';
import { render } from 'enzyme';
import ProductList from '../../components/ProductList';

describe('Product List Test', () => {
    const selectProduct = jest.fn();
    const deleteProduct = jest.fn();
    const products = [{ name: 'test', description: 'test' }];
    test('should render product list correctly', () => {
        const wrapper = render(<ProductList products={products} deleteProduct={deleteProduct} selectProduct={selectProduct} />);
        expect(wrapper.find('.list').length).toBe(1);
        expect(wrapper.find('.product-list-title').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render product list correctly with no product', () => {
        const wrapper = render(<ProductList products={[]} deleteProduct={deleteProduct} selectProduct={selectProduct} />);
        expect(wrapper.find('.list').length).toBe(0);
        expect(wrapper.find('.product-list-title').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
});

