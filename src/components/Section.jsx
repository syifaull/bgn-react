import React from "react";

const Section = (props) => {
  return (
    <div>
      <div className="">
        <p className=" fw-semibold fs-5">{props.title}</p>
        <hr></hr>
      </div>
    </div>
  );
};

export default Section;
