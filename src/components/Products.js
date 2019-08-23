import React, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../redux/actions/productsActions';

const Products = () => {
    // Mandar llamar la accion principal para retornar los productos
    const dispatch = useDispatch();

    useEffect(() => {
        // Obtener los productos cuando el componente este listo
        const loadProducts = () => dispatch(getProductsAction());
        loadProducts();
    });

    // Acceder al state global
    const loading = useSelector(state => state.products.loading);

    return (
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
                <tbody />
            </table>
            {loading ? 'Cargando...' : null}
        </React.Fragment>
    );
};

export default Products;
