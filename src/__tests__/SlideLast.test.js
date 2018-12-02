import React from "react";
import { shallow } from "enzyme";

import SlideLast from "../components/SlideLast";

describe("<SlideLast />", () => {
  it("renders with class 'slide-last'", () => {
    const wrapper = shallow(<SlideLast />);

    expect(wrapper.hasClass("slide-last")).toBeTruthy();
  });

  it("renders two 'h2'", () => {
    const wrapper = shallow(<SlideLast />);

    expect(wrapper.find("h2").length).toEqual(2);
  });
});
