import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card" style={{ width: "10rem" }}>
        <img
          src="https://w0.peakpx.com/wallpaper/23/577/HD-wallpaper-darth-vader-star-wars-sith-lightsaber-star-wars-battlefront-video-games-portrait-display-simple-background.jpg"
          className="p-1"
          alt="starwars things"
        />
      </div>
      <div style={{ width: "10rem" }}>
        <p className="text-center">Judul</p>
      </div>
    </div>
  );
};

export default Card;
