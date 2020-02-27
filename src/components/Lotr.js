import React, { useEffect, useState } from "react";
import Character from "./Character";

function Lotr({ history }) {
  const [stateObj, setStateObj] = useState({
    loading: true,
    characters: []
  });

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://the-one-api.herokuapp.com/v1/character`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_LOTR}`
        }
      }
    )
      .then(data => data.json())
      .then(data => {
        setStateObj({
          loading: false,
          characters: data.docs
        });
      })
      .catch(() => history.push("/"));

    return () => {
      setStateObj({
        loading: true,
        characters: []
      });
    };
  }, [history]);

  return stateObj.loading ? (
    <div className="loading"></div>
  ) : (
    <div className="Lotr">
      {
        <div className="box">
          {getData(stateObj.characters).map(item => (
            <Character person={item} key={item._id} />
          ))}
        </div>
      }
    </div>
  );
}
export default Lotr;

function getData(bigArray) {
  return bigArray.slice(0, 20);
}
