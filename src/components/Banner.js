import React from "react";
import { Link } from "react-router-dom";
function Banner({ cats }) {
  //

  return (
    <div className="Banner">
      {cats.map(item => (
        <div className="Banner-box" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description.split(".")[0]}</p>
          <Link to={`/cats/${item.id}`}>More...</Link>
        </div>
      ))}
    </div>
  );
}

export default Banner;
