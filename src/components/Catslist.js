import React, { useEffect, useState } from "react";
import Cat from "./Cat";

function Catslist(props) {
  //
  const [state, setState] = useState({
    cats: [],
    loading: true
  });

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?breed_id=${props.match.params.breed}&limit=4&page=1&size=small`,
      {
        headers: {
          "x-api-key": process.env.REACT_APP_CAT_SECRET
        }
      }
    )
      .then(data => data.json())
      .then(breeds => {
        setState({ loading: false, cats: breeds });
      })
      .catch(console.log);
    return () => {
      setState({
        cats: [],
        loading: true
      });
    };
  }, [props.match.params.breed]);
  console.log(state.cats);

  return (
    <div className="catslist">
      {state.loading ? (
        <div className="loading"></div>
      ) : (
        <>
          <h3>{state.cats[0].breeds[0].name}</h3>
          <p>{state.cats[0].breeds[0].description}</p>
          <p>Temperament : {state.cats[0].breeds[0].temperament}</p>
          <p>
            Child Friendliness : {state.cats[0].breeds[0].child_friendly} / 5
          </p>
          <p> Dog Friendliness : {state.cats[0].breeds[0].dog_friendly} / 5</p>
          <p> Life Span: {state.cats[0].breeds[0].life_span} years.</p>
          <div className="catsgallery">
            {state.cats.map(cat => (
              <Cat cat={cat} key={cat.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Catslist;
