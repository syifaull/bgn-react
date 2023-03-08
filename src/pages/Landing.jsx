import React from "react";

const Landing = () => {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
          alt="Star Wars logo"
          className="starwars-img"
        />
        <p className="fw-semibold pt-3">A guide for beginners</p>
        <br></br>
        <div className="row fw-bold fs-5">
          <a href="/people" className="col text-shine text-gray">
            People
          </a>
          <a href="/films" className="col text-shine text-gray">
            Films
          </a>
          <a href="/planets" className="col text-shine text-gray">
            Planets
          </a>
          <a href="/species" className="col text-shine text-gray">
            Species
          </a>
          <a href="/starships" className="col text-shine text-gray">
            Starships
          </a>
          <a href="/vehicles" className="col text-shine text-gray">
            Vehicles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
