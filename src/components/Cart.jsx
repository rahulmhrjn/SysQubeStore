import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const cart = useSelector((state) => state.handleCart || []);
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart'));
        if (cartData && cartData.length > 0) {
            setProducts(cartData);
        } else {
            setProducts([]);
        }
    }, []); 

    const handleButton = (product, action) => {
        if (action === 'add') {
            dispatch({ type: 'ADDITEM', payload: product });
            toast.success(`${product.title} added to cart!`); 
        } else if (action === 'remove') {
            dispatch({ type: 'DELETEITEM', payload: product });
            toast.warn(`${product.title} removed from cart!`);
        }
    };

    // Calculate subtotal
    const getSubtotal = () => {
        return cart.reduce((total, product) => total + product.qty * product.price, 0);
    };

    if (cart.length === 0) {
        return (
            <div className="container mt-5">
                <h2 className="text-center">Your Cart is Empty</h2>
                <ToastContainer /> 
            </div>
        );
    }

    return (
        <>
        <Helmet><title>Cart</title></Helmet>
            <div className='container mt-5'>
                {cart.map((product) => (
                    <div className='row' key={product.id} style={{ marginBottom: '20px' }}>
                        <div className='col-md-4'>
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className='col-md-4'>
                            <h3>{product.title}</h3>
                            <p className='lead fw-bold'>{product.qty} X ${product.price} = ${product.qty * product.price}</p>
                            <button className="btn btn-outline-dark me-4" onClick={() => handleButton(product, 'remove')}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark" onClick={() => handleButton(product, 'add')}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto text-center mb-4">
                        <h3>Subtotal: ${getSubtotal().toFixed(2)}</h3>
                    </div>
                    <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                        Proceed To Checkout
                    </NavLink>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Cart;
