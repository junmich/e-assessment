import React from 'react';

const List = ({ product, handleSelectProduct, handleDeleteProduct }) => {
    return (
        <div className="list">
            <div className="list__text">
                {product.name}  
                <div className="list__subtitle">{product.description}</div>
            </div>
            <div>
                <button className="default-button" onClick={() => handleSelectProduct()}>Edit</button>
                <button className="delete-button" onClick={() => handleDeleteProduct()}>Delete</button>
            </div>
        </div>
    );
}

List.defaultProps = {
    product: null
};

export default List;