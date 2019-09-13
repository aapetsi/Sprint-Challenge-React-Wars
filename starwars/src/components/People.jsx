import React from "react";
import Person from "./Person";

const People = ({ people }) => {
  const peopleArray = people.map(person => {
    return <Person person={person} />;
  });
  console.log(people);
  return (
    <div>
      <h1>People component</h1>
      {peopleArray}
    </div>
  );
};

export default People;
