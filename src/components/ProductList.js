import React from 'react';
import List from './List';

const ProductList = ({ products, selectProduct, deleteProduct }) => {
    return (
        <div className="product-list">
            <div className="product-list-title">Products</div>
            <div>
                {products.map((product, key) => <List key={key} product={product} handleSelectProduct={() => selectProduct(product)} handleDeleteProduct={() => deleteProduct(product)} />)}
            </div>
        </div>
        
    );
}

ProductList.defaultProps = {
    products: []
};

export default ProductList;