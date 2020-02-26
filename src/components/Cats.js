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
          `https://api.thecatapi.com/v1/breeds?limit=5&page=${pageNum}`,
          {
            headers: {
              "x-api-key": process.env.REACT_APP_CAT_SECRET
            }
          }
        )
      ).json();
      setStateObj({ cats: data, loading: false });
      console.log(data.length);
    })().catch(console.log);
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
        </div>
      )}
    </div>
  );
};

export default Cats;
