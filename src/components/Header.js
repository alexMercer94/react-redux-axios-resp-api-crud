import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>
                    <Link to={'/'} className="text-light">
                        CRUD - React, Reduz Hooks, REST API & Axios
                    </Link>
                </h1>
                <Link to={'/products/new'} className="btn btn-danger nuevo-post d-block d-md-inine-block">
                    Agregar Producto &#43;
                </Link>
            </div>
        </nav>
    );
};

export default Header;
