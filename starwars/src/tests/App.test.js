import React from "react";
import { shallow } from "enzyme";

import App from "../App";

describe("Stretch goal", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
