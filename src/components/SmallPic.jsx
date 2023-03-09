import React from "react";

const SmallPic = (props) => {
  return (
    <div>
      <div className="card " style={{ width: "3rem" }}>
        <img
          src="https://w0.peakpx.com/wallpaper/23/577/HD-wallpaper-darth-vader-star-wars-sith-lightsaber-star-wars-battlefront-video-games-portrait-display-simple-background.jpg"
          className="rounded"
          alt={props.go}
        />
      </div>
    </div>
  );
};

export default SmallPic;
