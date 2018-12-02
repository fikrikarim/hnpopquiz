import React from "react";
import { shallow } from "enzyme";

import SlideLoading from "../components/SlideLoading";

describe("<SlideLoading />", () => {
  it("renders with class 'slide-loading'", () => {
    const wrapper = shallow(<SlideLoading />);

    expect(wrapper.hasClass("slide-loading")).toBeTruthy();
  });

  it("renders a 'h1'", () => {
    const wrapper = shallow(<SlideLoading />);

    expect(wrapper.find("h1").length).toEqual(1);
  });
});
