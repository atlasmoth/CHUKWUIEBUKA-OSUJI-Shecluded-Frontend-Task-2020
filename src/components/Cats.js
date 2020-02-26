import React, { useEffect, useState } from "react";
import Cat from "./Cat";

const Cats = () => {
  const [stateObj, setStateObj] = useState({
    loading: true,
    cats: []
  });
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          `https://api.thecatapi.com/v1/breeds?limit=6&page=${pageNum}`,
          {
            headers: {
              "x-api-key": process.env.REACT_APP_CAT_SECRET
            }
          }
        )
      ).json();
      setStateObj({ cats: data, loading: false });
    })().catch(console.log);
    return () => {
      setStateObj({
        loading: true,
        cats: []
      });
    };
  }, [pageNum]);
  return (
    <div className="Cats">
      {stateObj.loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="catslist">
          {stateObj.cats.map(cat => (
            <Cat cat={cat} key={cat.id} />
          ))}
          <div className="nav-bottom">
            <button
              disabled={pageNum <= 1}
              onClick={e => setPageNum(pageNum === 1 ? 1 : pageNum - 1)}
            >
              Previous
            </button>
            <button
              disabled={pageNum >= 11}
              onClick={e => setPageNum(pageNum === 11 ? 11 : pageNum + 1)}
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
