import React from "react";

const Offer = ({ isNew }) => {
  let Dot;
  if (isNew === true) {
    Dot = "div";
  } else {
    Dot = "p";
  }

  return (
    <>
      <Dot></Dot>
    </>
  );
};

export default Offer;
