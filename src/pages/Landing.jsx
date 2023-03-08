import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    // min-vh-100
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
          alt="Star Wars logo"
          className="starwars-img"
        />
        <p className="fw-semibold pt-3">A guide for beginners</p>
        <Link to="/home">
          <p className="text-shine text-gray fw-bold fs-5">Get Started</p>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
