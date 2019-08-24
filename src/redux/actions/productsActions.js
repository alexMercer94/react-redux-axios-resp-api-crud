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
    PRODUCT_EDITED_SUCCESS,
    PRODUCT_EDITED_ERROR
} from '../types';
import axiosClient from '../../config/axios';
import Swal from 'sweetalert2';

//Crear un nuevo producto - funcion principal
export function createNewProductAction(product) {
    return dispatch => {
        dispatch(newProduct());

        // Insertar en la API
        axiosClient
            .post('/books', product)
            .then(response => {
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

export function getProductsAction() {
    return dispatch => {
        dispatch(startGetProducts());

        // Consultar la API
        axiosClient
            .get('/books')
            .then(response => {
                dispatch(downloadProductsSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(downloadProductsError());
            });
    };
}

export const startGetProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS
});

export const downloadProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
});

export const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR
});

// Función principal que elimina  un producto en especifico
export function deleteProductAction(id) {
    return dispatch => {
        dispatch(getProductDelete());

        // Eliminar producto en la API
        axiosClient
            .delete(`/books/${id}`)
            .then(response => {
                dispatch(productDeleteSuccess(id));
            })
            .catch(error => {
                console.log(error);
                dispatch(productDeleteError());
            });
    };
}

export const getProductDelete = () => ({
    type: GET_PRODUCT_DELETE
});

export const productDeleteSuccess = id => ({
    type: PRODUCT_DELETED_SUCCESS,
    payload: id
});

export const productDeleteError = () => ({
    type: PRODUCT_DELETED_ERROR
});

// Funcion principal para obetenr producto a editar
export function getProductEditarAction(id) {
    return dispatch => {
        dispatch(getProductEditAction());
        //Obtener producto de la API
        axiosClient
            .get(`/books/${id}`)
            .then(response => {
                dispatch(productEditSuccessAction(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(productEditProductError());
            });
    };
}

export const getProductEditAction = () => ({
    type: GET_PRODUCT_EDIT
});

export const productEditSuccessAction = product => ({
    type: PRODUCT_EDIT_SUCCESS,
    payload: product
});

export const productEditProductError = () => ({
    type: PRODUCT_EDIT_ERROR
});

// Modifica un producto en la API y state
export function editProductAction(product) {
    return dispatch => {
        dispatch(startEditingProductAction());

        // Consultar la API
        axiosClient
            .put(`/books/${product.id}`, product)
            .then(response => {
                dispatch(productEditedSuccessAction(response.data));
                Swal.fire({
                    type: 'success',
                    title: 'Almacenado',
                    text: 'El producto se actualizó correctamente',
                    showConfirmButton: true
                });
            })
            .catch(error => {
                // console.log(error);
                dispatch(productEditedErrorAction());
            });
    };
}

export const startEditingProductAction = () => ({
    type: START_EDITING_PRODUCT
});

export const productEditedSuccessAction = product => ({
    type: PRODUCT_EDITED_SUCCESS,
    payload: product
});

export const productEditedErrorAction = () => ({
    type: PRODUCT_EDITED_ERROR
});
