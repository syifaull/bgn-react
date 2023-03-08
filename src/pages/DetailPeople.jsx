import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Load from "../components/Load";
import Navigation from "../components/Navigation";

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
        <div className="d-flex">
          <div>
            <img
              src="https://w0.peakpx.com/wallpaper/23/577/HD-wallpaper-darth-vader-star-wars-sith-lightsaber-star-wars-battlefront-video-games-portrait-display-simple-background.jpg"
              alt="detail"
              className="image-detail"
            />
          </div>
          <div>
            {isLoading ? (
              <div>
                <Load />
              </div>
            ) : (
              <div className="row">{detail.name}</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPeople;
