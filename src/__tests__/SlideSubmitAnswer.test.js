import React from "react";
import { shallow } from "enzyme";

import SlideSubmitAnswer from "../components/SlideSubmitAnswer";

describe("<SlideSubmitAnswer />", () => {
  it("renders with class 'slide-loading'", () => {
    const wrapper = shallow(<SlideSubmitAnswer />);

    expect(wrapper.hasClass("slide-submit-answer")).toBeTruthy();
  });

  it("renders a 'h1'", () => {
    const wrapper = shallow(<SlideSubmitAnswer />);

    expect(wrapper.find("h1").exists()).toBeTruthy();
  });

  describe("when the button is clicked", () => {
    it("calls the onClick props", () => {
      const onClick = jest.fn();
      const wrapper = shallow(<SlideSubmitAnswer onClick={onClick} />);

      wrapper.find("button").simulate("click");

      expect(onClick).toBeCalled();
    });
  });
});
