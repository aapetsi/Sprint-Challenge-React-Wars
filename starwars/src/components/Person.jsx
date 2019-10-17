import React from "react";
import styled from "styled-components";

const WrapperCard = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  background-image: url(https://images.unsplash.com/photo-1459876947801-8879713c9b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);
`;

const HeaderTag = styled.h1`
  display: block;
  font-family: "Chilanka", "cursive";
  color: #007bff;
`;

const Person = ({ person }) => {
  // console.log(person);
  return (
    <div>
      <WrapperCard>
        <HeaderTag>{person.name}</HeaderTag>
        <HeaderTag>Number of Movies: {person.films.length}</HeaderTag>
        <HeaderTag>Number of Vehicles: {person.starships.length}</HeaderTag>
        <HeaderTag>Number of vehicles: {person.vehicles.length}</HeaderTag>
      </WrapperCard>
    </div>
  );
};

export default Person;
