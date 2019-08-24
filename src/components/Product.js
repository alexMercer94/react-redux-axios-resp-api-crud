import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../redux/actions/productsActions';

const Product = ({ product }) => {
    // Dispatch para ejecutar las acciones
    const dispatch = useDispatch();

    const confirmDeleteProduct = id => {
        // Confirmación de sweet alert
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Un producto eliminado no se puede recuperar',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then(result => {
            if (result.value) {
                Swal.fire('Eliminado!', 'El producto se elimino correctamente.', 'success');
                dispatch(deleteProductAction(id));
            }
        });
    };

    return (
        <tr>
            <td>{product.name}</td>
            <td>
                <span className="font-weight-bold">$ {product.price}</span>
            </td>
            <td className="acciones">
                <Link to={`/products/edit/${product.id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button onClick={() => confirmDeleteProduct(product.id)} className="btn btn-danger">
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Product;
