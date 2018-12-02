import React from "react";
import { shallow } from "enzyme";

import SlideLanding from "../components/SlideLanding";

describe("<SlideLanding />", () => {
  it("renders with class 'slide-landing'", () => {
    const wrapper = shallow(<SlideLanding />);

    expect(wrapper.hasClass("slide-landing")).toBeTruthy();
  });

  it("renders a 'h1'", () => {
    const wrapper = shallow(<SlideLanding />);

    expect(wrapper.find("h1").exists()).toBeTruthy();
  });

  it("renders a 'h2'", () => {
    const wrapper = shallow(<SlideLanding />);

    expect(wrapper.find("h2").exists()).toBeTruthy();
  });

  describe("when the button is clicked", () => {
    it("calls the onClick props", () => {
      const onClick = jest.fn();
      const wrapper = shallow(<SlideLanding onClick={onClick} />);

      wrapper.find("button").simulate("click");

      expect(onClick).toBeCalled();
    });
  });
});
