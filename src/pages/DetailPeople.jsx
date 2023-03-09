import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Load from "../components/Load";
import Navigation from "../components/Navigation";
import SmallPic from "../components/SmallPic";

const DetailPeople = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const [detail, setDetail] = useState([]);

  const getDetail = async () => {
    setIsLoading(true);
    await axios
      .get(`${location.state.detail}`)
      .then((result) => {
        setDetail(result.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <div className="container min-vh-100">
        <Navigation />
        <br></br>
        <a href="/people">
          <FontAwesomeIcon icon={faArrowLeft} size="xl" className="text-gray" />
        </a>
        <div className="">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <img
                  src="https://w0.peakpx.com/wallpaper/23/577/HD-wallpaper-darth-vader-star-wars-sith-lightsaber-star-wars-battlefront-video-games-portrait-display-simple-background.jpg"
                  alt="detail"
                  className="image-detail"
                />
              </div>
            </div>
            <div className="col-md-6 p-4 md:px-0 d-flex align-items-center">
              {isLoading ? (
                <div>
                  <Load />
                </div>
              ) : (
                <div>
                  <p className="fs-3 fw-semibold">{detail.name}</p>
                  <p>Height: {detail.height} cm</p>
                  <p>Mass: {detail.mass} kilos</p>
                  <p>Hair Color: {detail.hair_color}</p>
                  <p>Skin Color: {detail.skin_color}</p>
                  <p>Eye Color: {detail.eye_color}</p>
                  <p>Birth Year: {detail.birth_year}</p>
                  <p>Gender: {detail.gender}</p>
                  <div className="d-flex gap-3">
                    <div>
                      <p>
                        Homeworld: <SmallPic />{" "}
                      </p>
                      <p>
                        Films:
                        <div className="row">
                          {detail.films?.map((item, index) => {
                            return (
                              <div key={index} className="col">
                                <SmallPic go={item} />
                              </div>
                            );
                          })}
                        </div>
                      </p>
                    </div>
                    <div>
                      <p>
                        Vehicles:{" "}
                        <div className="row">
                          {detail.vehicles?.map((item, index) => {
                            return (
                              <div key={index} className="col">
                                <SmallPic go={item} />
                              </div>
                            );
                          })}
                        </div>
                      </p>
                      <p>
                        Starships:
                        <div className="row">
                          {detail.starships?.map((item, index) => {
                            return (
                              <div key={index} className="col">
                                <SmallPic go={item} />
                              </div>
                            );
                          })}
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPeople;
