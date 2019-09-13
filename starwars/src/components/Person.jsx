import React from "react";

const Person = ({ person }) => {
  console.log(person);
  return (
    <div>
      <h1>{person.name}</h1>
      <p>Number of Movies {person.films.length}</p>
    </div>
  );
};

export default Person;
