import React from "react";

const Cat = ({ cat }) => {
  return (
    <div className="Cat">
      <h3>{cat.name}</h3>
      <div className="img-container"></div>
      <p>{`${cat.description.split(".")[0]}.`}</p>
      <p>Temperament : {cat.temperament}</p>
      <p>Shedding : {`${cat.shedding_level} / 5`}</p>
      <p>Dog Friendliness : {`${cat.dog_friendly} / 5`}</p>
      <p>Child Friendliness : {`${cat.child_friendly} / 5`}</p>
      <p>Life Span : {`${cat.life_span} years.`}</p>
    </div>
  );
};

export default Cat;
