import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
} from '../constants';

const initialState = {
    data: [
        { name: 'default', description: 'default product'}
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT: {
            return { data: [...state.data, action.data]}
        }
        case UPDATE_PRODUCT: {
            const data = state.data;
            const index = data.findIndex(product => action.data.name === product.name);
            data[index].description = action.data.description;
            return { data };
        }
        case DELETE_PRODUCT: {
            return { data: state.data.filter(product => product.name !== action.data.name )};
        }
        default:
            return state;
    }

}

export default reducer;