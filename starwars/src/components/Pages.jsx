import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: blue;
  color: white;
  width: 50px;
  height: 30px;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
`;

const Pages = ({ pages, handleClick }) => {
  return (
    <div>
      {pages.map(page => (
        <Button value={page} onClick={handleClick} key={page}>
          {page}
        </Button>
      ))}
    </div>
  );
};

export default Pages;
