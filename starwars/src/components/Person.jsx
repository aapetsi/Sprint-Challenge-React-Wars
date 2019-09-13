import React from "react";
import styled from "styled-components";

const WrapperCard = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
`;

const HeaderTag = styled.h1`
  display: block;
  font-family: "Chilanka", "cursive";
`;

const Person = ({ person }) => {
  console.log(person);
  return (
    <div>
      <WrapperCard>
        <HeaderTag>{person.name}</HeaderTag>
        <p>Number of Movies: {person.films.length}</p>
        <p>Number of Vehicles: {person.starships.length}</p>
        <p>Number of vehicles: {person.vehicles.length}</p>
      </WrapperCard>
    </div>
  );
};

export default Person;
