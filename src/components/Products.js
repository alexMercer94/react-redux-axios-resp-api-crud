import React, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../redux/actions/productsActions';
import Product from './Product';

const Products = () => {
    // Mandar llamar la accion principal para retornar los productos
    const dispatch = useDispatch();

    useEffect(() => {
        // Obtener los productos cuando el componente este listo
        const loadProducts = () => dispatch(getProductsAction());
        loadProducts();
    }, []);

    // Acceder al state global
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);
    const products = useSelector(state => state.products.products);

    return (
        <React.Fragment>
            {error ? (
                <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</div>
            ) : (
                <React.Fragment>
                    <h2 className="text-center my-5">Listado de Productos</h2>
                    <table className="table table-striped">
                        <thead className="bg-primary table-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <Product key={product.id} product={product} />
                            ))}
                        </tbody>
                    </table>
                    {loading ? 'Cargando...' : null}
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default Products;
