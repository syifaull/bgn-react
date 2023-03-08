import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="container min-vh-100">
      <Navbar />
      <br></br>
      <div className="container px-md-5 py-5 text-center">
        <p>Discover Anything</p>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default Home;
