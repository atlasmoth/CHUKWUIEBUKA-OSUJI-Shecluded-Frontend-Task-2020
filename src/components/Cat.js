import React from "react";

const Cat = ({ cat }) => {
  return (
    <div className="Cat">
      <div className="img-container">
        <img src={cat.url} alt="cat" width="150" height="150" />
      </div>
    </div>
  );
};

export default Cat;
