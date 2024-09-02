import React from 'react'
import { Formik, Form, Field } from 'formik'
import { RegisterValidation } from './RegisterValidation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const Register = () => {
    const initialValues ={
        fullname:'',
        email:'',
        password:'',
        cpassword:''
    }

    const handleSubmit = (values) => {
        console.log(values);
        toast.success('Registration successful!');
      };

  return (
    <>
    <Helmet><title>Register</title></Helmet>
    <div className="container my-5">
    <div className="row d-flex justify-content-center">
      <div className="col-md-5 shadow p-3">
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterValidation}
          onSubmit={handleSubmit}
        >
          {({ errors, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 text-center">Please Register</h1>

              <div className="mb-2 form-floating">
                <Field
                  type="text"
                  name="fullname"
                  className="form-control"
                  placeholder="Full Name"
                />
                <label htmlFor="fullname">Full Name</label>
                {errors.fullname && <small className="text-danger">{errors.fullname}</small>}
              </div>

              <div className="form-floating mb-2">
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
                <label htmlFor="email">Email address</label>
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="form-floating mb-2">
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
                <label htmlFor="password">Password</label>
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              <div className="form-floating mb-2">
                <Field
                  type="password"
                  name="cpassword"
                  className="form-control"
                  placeholder="Confirm Password"
                />
                <label htmlFor="cpassword">Confirm Password</label>
                {errors.cpassword && <small className="text-danger">{errors.cpassword}</small>}
              </div>

              <div className="form-check text-start my-3">
                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Accept to our policy.
                </label>
              </div>
              <button className="btn btn-outline-dark w-50 py-2" type="submit">Register</button>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </div>
    </div>
  </div>
  </>
  )
}

export default Register