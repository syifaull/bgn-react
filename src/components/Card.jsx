import React from "react";

const Card = (props) => {
  return (
    <div className="text-shine">
      <div className="card " style={{ width: "10rem" }}>
        <img
          src="https://w0.peakpx.com/wallpaper/23/577/HD-wallpaper-darth-vader-star-wars-sith-lightsaber-star-wars-battlefront-video-games-portrait-display-simple-background.jpg"
          className="p-1"
          alt="starwars things"
        />
      </div>
      <div style={{ width: "10rem" }}>
        <p className="text-center">{props.name}</p>
      </div>
    </div>
  );
};

export default Card;
