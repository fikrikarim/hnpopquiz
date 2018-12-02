import React from "react";
import { shallow } from "enzyme";

import SlideScore from "../components/SlideScore";

describe("<SlideScore />", () => {
  it("renders with class 'slide-score'", () => {
    const wrapper = shallow(<SlideScore />);

    expect(wrapper.hasClass("slide-score")).toBeTruthy();
  });

  it("renders a 'h1'", () => {
    const wrapper = shallow(<SlideScore />);

    expect(wrapper.find("h1").exists()).toBeTruthy();
  });

  it("renders the score", () => {
    const score = "7";
    const wrapper = shallow(<SlideScore score={score} />);

    expect(wrapper.contains("7")).toBeTruthy();
  });

  describe("when 'Show Answer' button is clicked", () => {
    it("calls the onClickShowAnswer props", () => {
      const onClick = jest.fn();
      const wrapper = shallow(<SlideScore onClickShowAnswer={onClick} />);

      wrapper.find(".btn-show-answer").simulate("click");

      expect(onClick).toBeCalled();
    });
  });

  describe("when 'Try Again' button is clicked", () => {
    it("calls the onClickShowAnswer props", () => {
      const onClick = jest.fn();
      const wrapper = shallow(<SlideScore onClickTryAgain={onClick} />);

      wrapper.find(".btn-try-again").simulate("click");

      expect(onClick).toBeCalled();
    });
  });
});
