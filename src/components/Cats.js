import React, { useEffect, useReducer } from "react";
import Catslist from "./Catslist";
import Banner from "./Banner";

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return { ...state, breeds: action.breeds, loading: false };
    }
    case "update": {
      return { ...state, page: action.page };
    }
    default: {
      return state;
    }
  }
}

const Cats = () => {
  const [stateObj, dispatch] = useReducer(reducer, {
    breeds: [],
    page: 1,
    loading: true
  });

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/breeds?limit=12&page=${stateObj.page}`,
      {
        headers: {
          "x-api-key": process.env.REACT_APP_CAT_SECRET
        }
      }
    )
      .then(data => data.json())
      .then(breeds => {
        dispatch({
          type: "add",
          breeds
        });
      })
      .catch(console.log);
  }, [stateObj.page]);
  return (
    <div className="Cats">
      {stateObj.loading ? (
        <div className="loading"></div>
      ) : (
        <div className="container">
          <Banner cats={stateObj.breeds} />
          <div className="navigation">
            <button
              disabled={stateObj.page === 1}
              onClick={() =>
                dispatch({
                  type: "update",
                  page: stateObj.page === 1 ? 1 : stateObj.page - 1
                })
              }
            >
              Previous
            </button>
            <button
              disabled={stateObj.page === 5}
              onClick={() =>
                dispatch({
                  type: "update",
                  page: stateObj.page === 5 ? 5 : stateObj.page + 1
                })
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cats;
