import React from "react";

const Pages = ({ pages, handleClick }) => {
  return (
    <div>
      {pages.map(page => (
        <button value={page} onClick={handleClick} key={page}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pages;
