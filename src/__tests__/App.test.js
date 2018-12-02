import React from "react";
// Cannot shallow render a component containing hooks
// https://github.com/facebook/react/issues/14091
import { mount } from "enzyme";

import App from "../App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<App />);

    expect(wrapper).toBeTruthy();
  });
});
