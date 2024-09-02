import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentInformation = () => {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    cvv: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form data
  const validateForm = () => {
    let formErrors = {};
    if (!formData.cardholderName) formErrors.cardholderName = 'Cardholder name is required';
    if (!formData.cardNumber || formData.cardNumber.length !== 16) formErrors.cardNumber = 'Card number must be 16 digits';
    if (!formData.cvv || formData.cvv.length !== 3) formErrors.cvv = 'CVV must be 3 digits';
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Simulate payment process
      toast.success('Payment successful!');
      setTimeout(() => {
        navigate('/success'); // Redirect to confirmation page
      }, 1500);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <Helmet><title>Payment</title></Helmet>
      <div className="container mt-5">
        <h2 className="mb-4">Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Cardholder Name</label>
            <input
              type="text"
              className={`form-control ${errors.cardholderName ? 'is-invalid' : ''}`}
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
            />
            {errors.cardholderName && <div className="invalid-feedback">{errors.cardholderName}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Card Number</label>
            <input
              type="text"
              className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength="16"
            />
            {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">CVV</label>
            <input
              type="text"
              className={`form-control ${errors.cvv ? 'is-invalid' : ''}`}
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              maxLength="4"
            />
            {errors.cvv && <div className="invalid-feedback">{errors.cvv}</div>}
          </div>
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-outline-dark" onClick={() => navigate('/shipping')}>
              Back to Shipping
            </button>
            <button type="submit" className="btn btn-outline-dark">
              Pay Now
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default PaymentInformation;