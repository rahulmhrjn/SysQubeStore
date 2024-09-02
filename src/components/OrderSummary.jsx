import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const OrderSummary = () => {
    const cart = useSelector((state) => state.handleCart || []);

    const getSubtotal = () => {
        return cart.reduce((total, product) => total + product.qty * product.price, 0);
    };

    return (
        <>
        <Helmet><title>Order Summary</title></Helmet>
            <div className='container mt-5'>
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Order Summary</h1>
                    <hr />
                </div>
                {cart.map((product) => (
                    <div className='row' key={product.id} style={{ marginBottom: '20px' }}>
                        <div className='col-md-4'>
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className='col-md-4'>
                            <h3>{product.title}</h3>
                            <p className='lead fw-bold'>{product.qty} X ${product.price} = ${product.qty * product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto text-center mb-4">
                        <h3>Subtotal: ${getSubtotal().toFixed(2)}</h3>
                    </div>
                    <NavLink to='/shipping' className="btn btn-outline-dark mb-5 w-25 mx-auto">
                        Proceed To Pay
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default OrderSummary;