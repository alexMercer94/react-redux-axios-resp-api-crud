import React, { useState } from 'react';

const NewProduct = () => {
    // state
    const [name, saveName] = useState('');
    const [price, savePrice] = useState('');

    // Add new product
    const submitNewProduct = e => {
        e.preventDefault();

        // Validar el formulario
        if (name.trim() === '' || price.trim() === '') {
            return;
        }

        // Si pasa la validación

        // Crear el nuevo producto

        // Redireccionar
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
