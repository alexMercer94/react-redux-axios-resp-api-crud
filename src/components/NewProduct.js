import React, { useState } from 'react';

// Redux
import { createNewProductAction } from '../redux/actions/productsActions';
import { validateFormAction, successValidation, errorValidation } from '../redux/actions/validationActions';
import { useDispatch, useSelector } from 'react-redux';

const NewProduct = ({ history }) => {
    // state
    const [name, saveName] = useState('');
    const [price, savePrice] = useState('');

    // Create new product
    const dispatch = useDispatch();
    const addProduct = product => dispatch(createNewProductAction(product));
    const validateForm = () => dispatch(validateFormAction());
    const validationSuccess = () => dispatch(successValidation());
    const validationError = () => dispatch(errorValidation());

    // Obetener los datos del State Global
    const error = useSelector(state => state.error.error);

    // Add new product
    const submitNewProduct = e => {
        e.preventDefault();

        // Validar el formulario
        validateForm();
        if (name.trim() === '' || price.trim() === '') {
            validationError();
            return;
        }

        // Si pasa la validación
        validationSuccess();
        // Crear el nuevo producto
        addProduct({
            name,
            price
        });

        // Redireccionar
        history.push('/');
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
                        <form onSubmit={submitNewProduct}>
                            <div className="form-group">
                                <label>Nombre Libro</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Libro"
                                    value={name}
                                    onChange={e => saveName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Libro</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Precio Libro"
                                    value={price}
                                    onChange={e => savePrice(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Agregar
                            </button>
                        </form>
                        {error ? (
                            <div className="font-weight-bold alert alert-danger text-center mt-4">
                                Todos los campos son obligatorios
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
