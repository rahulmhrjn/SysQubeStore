import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { LoginValidation } from './LoginValidation';
import { Field, Form, Formik } from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate();
    const initialValues = {
        email:'',
        password:''
    }
    const handleSubmit = (values) => {
        console.log(values);
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        toast.success('Login successful!');
    
        setTimeout(() => {
          navigate('/products');
        }, 1500);
      };

    //   const handleLogin = () => {
    //     localStorage.setItem('isLoggedIn', 'true');
    //     setIsLoggedIn(true);
    //   }
  return (
<>
<Helmet><title>Login</title></Helmet>
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5 shadow p-3">
          <Formik
            initialValues={initialValues}
            validationSchema={LoginValidation}
            onSubmit={handleSubmit}
          >
            {({ errors }) => (
              <Form>
                <h1 className="mb-2 text-center">Please Login</h1>

                <div className="form-floating mb-2">
                  <Field
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
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

                <div className="form-check text-start mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="remember-me"
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                  </label>
                </div>

                <button className="btn btn-outline-dark w-25 py-2" type="submit">
                  Login
                </button>
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

export default Login