import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import People from "./components/People";
import Loader from "./components/Loader";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);

  let pages = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let apiUrl = "https://swapi.co/api/people";

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // https://swapi.co/api/people
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        let characters = res.data.results;
        setPeople([...characters]);
        console.log(characters);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // render loading or people
  const renderPeopleOrLoading =
    people.length === 0 ? <Loader /> : <People people={people} />;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {renderPeopleOrLoading}
    </div>
  );
};
export default App;
