import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="pb-3">
      <hr></hr>
      <p className="text-center">Find Us</p>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
      <p className="text-center">Created by Syifa</p>
    </footer>
  );
};

export default Footer;
