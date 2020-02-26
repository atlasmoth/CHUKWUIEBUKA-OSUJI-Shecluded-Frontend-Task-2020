import React from "react";

const Cat = ({ cat }) => {
  //

  return (
    <div className="Cat">
      <h3>{cat.name}</h3>
      <img src={cat.cfa_url} alt={cat.name} />
      <p>{`${cat.description.split(".")[0]}.`}</p>
      <p>{cat.temperament}</p>
      <p>{`${cat.shedding_level} / 5`}</p>
      <p>{`${cat.dog_friendly} / 5`}</p>
      <p>{`${cat.child_friendly} / 5`}</p>
      <p>{`${cat.life_span} years.`}</p>
    </div>
  );
};

export default Cat;
