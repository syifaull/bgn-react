import React from "react";
import image1 from "../styles/332c2c2d4648f1bfda79c2a535967a6c.jpg";
import image8 from "../styles/Ackbar-457x600.jpg";
import image2 from "../styles/depositphotos_104344366-stock-photo-portrait-of-darth-vader-costume.jpg";
import image3 from "../styles/ed2c642357aba3fa81de43aa67f0eafc.jpg";
import image9 from "../styles/edward-denton-edred-beautiful-romantic-female-portrait-william-morris-fabric-14573b41-d823-42b8-9ec3-40e8620d688d.jpg";
import image4 from "../styles/HD-wallpaper-darth-vader-star-wars-sith-lightsaber-star-wars-battlefront-video-games-portrait-display-simple-background.jpg";
import image10 from "../styles/HD-wallpaper-star-wars-b-wing-a-wing-x-wing-tie-interceptor-death-star-star-destroyer-battle-portrait-display-artwork.jpg";
import image6 from "../styles/images.jfif";
import image11 from "../styles/kylo-ren-2016-mike-mitchell_1024x1024.webp";
import image5 from "../styles/main-qimg-e06801b98b1ad3a3e06a4eb36d9a65b2-lq.jfif";
import image7 from "../styles/star-wars-darth-vader-minimalism-lightsaber-portrait-display-wallpaper-preview.jpg";
import image12 from "../styles/starwars-mike-mitchell-01.jpg";
import image13 from "../styles/starwars-mike-mitchell-02b.jpg";
import image14 from "../styles/starwars-mike-mitchell-05.jpg";
import image15 from "../styles/starwars-mike-mitchell-07.jpg";

const randoms = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
];

const SmallPic = (props) => {
  const pict = randoms[Math.floor(Math.random() * 15)];
  return (
    <div>
      <div className="card " style={{ width: "3rem" }}>
        <img src={pict} className="rounded card-img-small" alt={props.go} />
      </div>
    </div>
  );
};

export default SmallPic;
