import React from "react";
import styled from "styled-components";
import Person from "./Person";

const WrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

const People = ({ people }) => {
  const peopleArray = people.map((person, index) => {
    return <Person key={index} person={person} />;
  });

  return (
    <WrapperDiv>
      <h1>Cool fun facts about starwars cast</h1>
      <WrapperDiv>{peopleArray}</WrapperDiv>
    </WrapperDiv>
  );
};

export default People;
