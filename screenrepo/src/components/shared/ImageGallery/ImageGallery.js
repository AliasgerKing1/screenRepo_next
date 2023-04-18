import React from "react";
import Images from "./Images";

const ImageGallery = ({ screenInfo }) => {
let screens = screenInfo.slice(0, 9)
  return (
    <div className="wrapper">
      <div className="container">
        <div className="grid grid-three-column">
          {screens.map((curVal, id) => {
            return <Images key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;