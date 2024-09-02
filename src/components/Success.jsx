import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Success = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  toast.success('Payment was successful!');

  return (
    <>
      <Helmet>
        <title>Payment Success</title>
      </Helmet>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 text-center shadow p-4">
            <h1 className="mb-4">Payment Successful!</h1>
            <p className="lead">Thank you for your purchase. Your payment has been processed successfully.</p>
            <div className="mt-4">
              <button className="btn btn-outline-dark me-2" onClick={handleHomeClick}>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Success;