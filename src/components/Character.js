import React from "react";

export default ({ person }) => {
  return (
    <div className="Character">
      <h3>{person.name}</h3>
      <p>{person.gender}</p>
      <p>{person.race}</p>
      <p>Birth : {person.birth}</p>
    </div>
  );
};
