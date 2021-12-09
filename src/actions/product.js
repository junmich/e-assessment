import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
} from '../constants';

export const createProduct = (data) => ({
    type: CREATE_PRODUCT,
    data
});

export const updateProduct = (data) => ({
    type: UPDATE_PRODUCT,
    data
});

export const deleteProduct = (data) => ({
    type: DELETE_PRODUCT,
    data
});