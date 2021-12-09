import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import ActionButton from './ActionButton';
import { createProduct, updateProduct, deleteProduct } from '../actions';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            product: null,
            action: 'read', // read || write
        }
    }
    handleCreateUpdateProduct = (productInput, type='add') => {
        if (type === 'add' && this.props.products.findIndex(product => product.name === productInput.name) > -1) {
            return 'Product already exists';
        } else if (productInput.name === '' || productInput.description === '') {
            return 'Please complete the details in the form';
        }
        switch (type) {
            case 'add':
                this.props.createProduct(productInput);
                break;
            case 'edit':
                this.props.updateProduct(productInput);
                break;
            default:
                break;
        }
        this.setState(() => ({ action: 'read' }));
    }
    selectProduct = (product) => this.setState(() => ({ product, action: 'write' }));
    deleteProduct = (product) => {
        this.props.deleteProduct(product);
    }
    render() {
        return (
            <div className="container">
                <Header />
                
                {this.state.action === 'read' ? (
                    <div>
                        <ActionButton onClick={() => this.setState(() => ({ action: 'write' }))} />
                        <ProductList 
                            products={this.props.products}
                            selectProduct={this.selectProduct}
                            deleteProduct={this.deleteProduct}
                        />
                    </div>)
                 : <ProductForm
                        handleCreateUpdateProduct={this.handleCreateUpdateProduct}
                        product={this.state.product} 
                        backButton={()=>this.setState(() => ({ action : 'read' }))}
                        />} 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       products: state.data
    };
 };
 const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (data) => dispatch(createProduct(data)),
        updateProduct: (data) => dispatch(updateProduct(data)),
        deleteProduct: (data) => dispatch(deleteProduct(data)),
    };
 };

export default connect(mapStateToProps, mapDispatchToProps) (Main);