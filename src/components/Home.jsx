import React from "react";
import Products from "./Products";
import { Helmet } from "react-helmet";
import bgImage from "../assets/bg.jpg";

const Home = () => {
  return (
    <>
    <Helmet><title>Home</title></Helmet>
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={bgImage} className="card-img" alt="Background" height='550px' />
        <div className="card-img-overlay d-flex flex-column justify-content-centere">
            <div className="container">

            </div>
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
        </div>
      </div>
      <Products/>
    </div>
    </>
  );
};

export default Home;
