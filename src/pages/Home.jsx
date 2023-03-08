import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

const Home = () => {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    await axios
      // .get(process.env.REACT_APP_BASE_URL + "/people")
      .get(process.env.REACT_APP_BASE_URL + "/people/?page=3")
      .then((result) => {
        setPeople(result.data.results);
      })
      .catch((err) => {
        alert("error");
      });
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      <div className="container min-vh-100">
        <Navigation />
        <br></br>
        <div className="container px-md-5 py-5 text-center">
          <p>Discover Anything</p>
          <div className="input-group my-3">
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
        <div className="">
          <Section />
          <div className="row row-cols-lg-5">
            {people.map((item, index) => {
              return (
                <div className="col pb-3">
                  <Card key={index} name={item.name} />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center py-5">
            <div className="row">
              <div className="col">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="col">
                <p>1</p>
              </div>
              <div className="col">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
