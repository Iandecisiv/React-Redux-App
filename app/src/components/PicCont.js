import React from "react";

const PicCont = (props) => {
  return (
    <div className="pic-card">
      <img className="nasa-image" alt="space picture" src={props.image.url} />
    </div>
  );
};

export default PicCont;