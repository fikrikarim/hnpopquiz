import React from "react";
import { shallow } from "enzyme";

import SlideLoading from "../components/SlideLoading";

describe("<SlideLoading />", () => {
  it("renders with class 'slide-loading'", () => {
    const wrapper = shallow(<SlideLoading />);

    expect(wrapper.hasClass("slide-loading")).toBeTruthy();
  });
});
