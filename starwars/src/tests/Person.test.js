import React from "react";
import { shallow } from "enzyme-adapter-react-16";
import Person from "../components/Person";

describe("Stretch goal", () => {
  it("renders without crashing", () => {
    shallow(<Person />);
  });
});
