import React, { useState, useEffect } from 'react';

const ProductForm = ({ handleCreateUpdateProduct, product, backButton }) => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(undefined);

    useEffect(() => {
        if (product) {
            setProductName(product.name);
            setDescription(product.description);

        }
    }, [product]);
    const clearForm = () => {
        setProductName('');
        setDescription('');
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const type = product ? 'edit' : 'add';
        const errorName = handleCreateUpdateProduct({ name: productName, description }, type);
        if (!errorName) {
            clearForm();
        } else {
            setError(errorName);
        }            
    };

    return (
        <div className="product-form">
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        className="product-form__input"
                        readOnly={product} value={productName} 
                        onChange={e => setProductName(e.target.value)} 
                        type="text"
                    />
                </div>
                <div>
                    <textarea 
                        className="product-form__text-area" 
                        onChange={e => setDescription(e.target.value)} 
                        value={description} 
                    />
                </div>
                <button 
                    className="default-button" 
                    type="submit">
                        {product? 'Update' : 'Add'}
                </button>
                <button
                    onClick={backButton}
                    className="delete-button" 
                    type="button">
                        Back
                </button>
            </form>
        </div>
    );
}


export default ProductForm;