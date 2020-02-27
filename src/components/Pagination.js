import React from "react";

const Pagination = ({ num, dispatch }) => {
  const pages = [];
  for (let i = 0; i < num; i++) {
    pages[i] = i + 1;
  }

  return (
    <div className="pagination">
      {pages.map(item => (
        <button
          value={item}
          key={item}
          onClick={e =>
            dispatch({ type: "update", page: Number(e.target.value) })
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
