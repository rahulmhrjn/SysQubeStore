import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const ShippingInformation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form data
  const validate = () => {
    const errors = {};

    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.state) errors.state = 'State/Province is required';
    if (!formData.zipCode) errors.zipCode = 'Zip Code is required';
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone Number is required';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
 
      navigate('/payment');
    }
  };

  return (
    <>
    <Helmet>Shipping Details</Helmet>
    <div className="container mt-5">
      <h2 className="mb-4">Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <div className="invalid-feedback">{errors.address}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className={`form-control ${errors.city ? 'is-invalid' : ''}`}
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">State/Province</label>
          <input
            type="text"
            className={`form-control ${errors.state ? 'is-invalid' : ''}`}
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          {errors.state && <div className="invalid-feedback">{errors.state}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Zip Code</label>
          <input
            type="text"
            className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
          {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <input
            type="text"
            className={`form-control ${errors.country ? 'is-invalid' : ''}`}
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && <div className="invalid-feedback">{errors.country}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-outline-dark" onClick={() => navigate('/cart')}>
            Back to Cart
          </button>
          <button type="submit" className="btn btn-outline-dark">
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ShippingInformation;
