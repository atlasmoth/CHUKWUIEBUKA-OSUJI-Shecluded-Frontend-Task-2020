import React, { useEffect, useReducer } from "react";
import Banner from "./Banner";
import Pagination from "./Pagination";

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return { ...state, breeds: [...action.breeds], loading: false };
    }
    case "update": {
      return { ...state, page: action.page };
    }
    case "refresh": {
      return { ...state, breeds: [], loading: true };
    }
    default: {
      return state;
    }
  }
}

const Cats = ({ history }) => {
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
      .catch(({ message }) => {
        console.log(message);
        history.push("/");
      });
    return () => dispatch({ type: "refresh" });
  }, [stateObj.page, history]);
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
            <Pagination num={5} dispatch={dispatch} />
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
