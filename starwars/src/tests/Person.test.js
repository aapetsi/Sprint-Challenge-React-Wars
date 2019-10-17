import React from "react";
import Person from "../components/Person";
import { shallow } from "enzyme";

const person = {
  name: "John Doe",
  films: [1, 2, 3, 4],
  vehicles: [1, 2, 3],
  starships: []
};

describe("Stretch goal", () => {
  it("renders with correct data", () => {
    shallow(<Person person={person} />);
  });
});
