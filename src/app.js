import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import productReducer from './reducers/product';

const store = createStore(productReducer);

import Main from './components/Main';

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>, document.getElementById('app'));