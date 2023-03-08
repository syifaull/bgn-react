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
  const [allPage, setAllpage] = useState(0);
  const [page, setPage] = useState(1);
  // process.env.REACT_APP_BASE_URL

  const getPeople = async (page) => {
    await axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((result) => {
        setPeople(result.data.results);
        setAllpage(result.data.count);
      })
      .catch((err) => {
        alert("error");
      });
  };

  useEffect(() => {
    getPeople(page);
  }, [page]);

  const handlePrevious = () => {
    setPage(page > 1 ? page - 1 : 1);
  };
  const handleNext = () => {
    setPage(Math.ceil(allPage / 10) === page ? page : page + 1);
  };

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
          <Section title="People" />
          <div className="row row-cols-lg-5 pt-4">
            {people.map((item, index) => {
              return (
                <div
                  className="col d-flex justify-content-center pb-3"
                  key={index}
                >
                  <Card name={item.name} />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center py-3">
            <div className="row text-shine">
              <div className="col">
                <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrevious} />
              </div>
              <div className="col">{page}</div>
              <div className="col">
                <FontAwesomeIcon icon={faArrowRight} onClick={handleNext} />
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
