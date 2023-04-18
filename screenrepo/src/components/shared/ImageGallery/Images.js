import React from "react";

const Images = ({ myData }) => {
  const { compName, screen_shot, _id } = myData;
  return (
        <img src={screen_shot} alt="" className="screen_image" />
  );
};

export default Images;