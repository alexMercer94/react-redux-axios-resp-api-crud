import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_ERROR,
    DOWNLOAD_PRODUCTS_SUCCESS,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETED_ERROR,
    PRODUCT_DELETED_SUCCESS,
    PRODUCT_EDIT_ERROR,
    PRODUCT_EDIT_SUCCESS,
    GET_PRODUCT_EDIT,
    START_EDITING_PRODUCT,
    PRODUCT_EDITED_ERROR,
    PRODUCT_EDITED_SUCCESS
} from '../types';

// Cada reducer tiene su state

const initialState = {
    products: [],
    error: null,
    loading: false,
    product: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                error: null
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                products: [...state.products, action.payload]
            };
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                error: true
            };

        case START_DOWNLOAD_PRODUCTS:
            return {
                ...state,
                loading: true,
                product: {}
            };
        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: false,
                product: {}
            };
        case DOWNLOAD_PRODUCTS_ERROR:
            return {
                ...state,
                products: [],
                loading: false,
                error: true
            };

        case GET_PRODUCT_DELETE:
            return {
                ...state,
                error: null
            };
        case PRODUCT_DELETED_ERROR:
            return {
                ...state,
                error: true
            };
        case PRODUCT_DELETED_SUCCESS:
            return {
                ...state,
                error: null,
                products: state.products.filter(product => product.id !== action.payload)
            };
        case GET_PRODUCT_EDIT:
            return {
                ...state,
                error: null
            };
        case PRODUCT_EDIT_SUCCESS:
            return {
                ...state,
                error: null,
                product: action.payload
            };
        case PRODUCT_EDIT_ERROR:
            return {
                ...state,
                error: true
            };
        case START_EDITING_PRODUCT:
            return {
                ...state,
                error: null
            };
        case PRODUCT_EDITED_SUCCESS:
            return {
                ...state,
                error: null,
                products: state.products.map(product =>
                    product.id === action.payload.id ? (product = action.payload) : product
                )
            };
        case PRODUCT_EDITED_ERROR:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}
