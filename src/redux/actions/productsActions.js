import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_ERROR,
    DOWNLOAD_PRODUCTS_SUCCESS
} from '../types';
import axiosClient from '../../config/axios';

//Crear un nuevo producto - funcion principal
export function createNewProductAction(product) {
    return dispatch => {
        dispatch(newProduct());

        // Insertar en la API
        axiosClient
            .post('/books', product)
            .then(response => {
                console.log(response);
                // Se ejecuta esta accion si se inserta correctamente
                dispatch(addProductSuccess(product));
            })
            .catch(error => {
                console.log(error);
                // Si hay un error, ejecutar la acción de error
                dispatch(addProductError());
            });
    };
}

export const newProduct = () => ({
    type: ADD_PRODUCT
});

export const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

export const addProductError = error => ({
    type: ADD_PRODUCT_ERROR
});

// TODO: Get products List (FETCH API)
export function getProductsAction() {
    return dispatch => {
        dispatch(startGetProducts());
    };
}

export const startGetProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS
});
