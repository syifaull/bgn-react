import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Load from "../components/Load";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [allPage, setAllpage] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getFilms = async (page) => {
    setIsLoading(true);
    await axios
      .get(process.env.REACT_APP_BASE_URL + `/films/?page=${page}`)
      .then((result) => {
        setFilms(result.data.results);
        setAllpage(result.data.count);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("error");
      });
  };

  useEffect(() => {
    getFilms(page);
  }, [page]);

  const handlePrevious = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  const handleNext = () => {
    setPage(Math.ceil(allPage / 10) === page ? page : page + 1);
  };

  const handleDetail = (detail) => {
    navigate("/blm-ada", {
      state: {
        detail: detail,
      },
    });
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
        <div className="min-vh-100">
          <Section title="Films" />
          <div className=" d-flex justify-content-center">
            {isLoading ? (
              <div>
                <Load />
              </div>
            ) : (
              <div className="row row-cols-lg-5 pt-4">
                {films.map((item, index) => {
                  return (
                    <div
                      className="col d-flex justify-content-center pb-3"
                      key={index}
                    >
                      <Card
                        name={item.title}
                        detail={() => handleDetail(item.url)}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center py-3">
          <div className="row text-shine">
            <div className="col">
              <FontAwesomeIcon
                icon={faArrowLeft}
                onClick={handlePrevious}
                className={page === 1 ? "text-dark-gray" : ""}
              />
            </div>
            <div className="col">{page}</div>
            <div className="col">
              <FontAwesomeIcon
                icon={faArrowRight}
                onClick={handleNext}
                className={
                  page === Math.ceil(allPage / 10) ? "text-dark-gray" : ""
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Films;
