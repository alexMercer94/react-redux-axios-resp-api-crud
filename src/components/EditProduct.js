import React, { useEffect, Fragment, useRef } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getProductEditarAction, editProductAction } from '../redux/actions/productsActions';
import { validateFormAction, successValidation, errorValidation } from '../redux/actions/validationActions';

const EditProduct = ({ match, history }) => {
    // Crear refs
    const nameRef = useRef('');
    const priceRef = useRef('');

    // Dispatch para ejecutar la función principal
    const dispatch = useDispatch();
    const editProduct = product => dispatch(editProductAction(product));
    const validateForm = () => dispatch(validateFormAction());
    const validationSuccess = () => dispatch(successValidation());
    const validationError = () => dispatch(errorValidation());

    // Obtener el ID a editar
    const { id } = match.params;

    useEffect(() => {
        dispatch(getProductEditarAction(id));
    }, [dispatch, id]);

    // Acceder al state global
    const product = useSelector(state => state.products.product);
    const error = useSelector(state => state.products.error);

    // Cuando carga la API
    if (!product) return 'Cargando...';

    const submitEditProduct = e => {
        e.preventDefault();

        // Validar form
        validateForm();
        if (nameRef.current.value.trim() === '' || priceRef.current.value.trim() === '') {
            validationError();
            return;
        }
        // No hay error
        validationSuccess();
        // Guardar cambios
        editProduct({
            id,
            name: nameRef.current.value,
            price: priceRef.current.value
        });

        // Redireccionar
        history.push('/');
    };

    return (
        <Fragment>
            {error ? (
                <div className="font-weight-bold alert alert-danger text-center mt-4">
                    Hubo un error, intenta de nuevo
                </div>
            ) : (
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center">Editar Producto</h2>
                                <form onSubmit={submitEditProduct}>
                                    <div className="form-group">
                                        <label>Titulo</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Titulo"
                                            defaultValue={product.name}
                                            ref={nameRef}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Precio del Producto</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Precio"
                                            defaultValue={product.price}
                                            ref={priceRef}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                    >
                                        Guardar Cambios
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default EditProduct;
