import React from "react";
// Cannot shallow render a component containing hooks
// https://github.com/facebook/react/issues/14091
import { mount } from "enzyme";

import App from "../App";
import SlideLanding from "../components/SlideLanding";
import SlideScore from "../components/SlideScore";
import SlideQuestion from "../components/SlideQuestion";
import SlideSubmitAnswer from "../components/SlideSubmitAnswer";
import SlideLast from "../components/SlideLast";
import SlideLoading from "../components/SlideLoading";

describe("<App />", () => {
  xit("renders without crashing", () => {
    const wrapper = mount(<App />);

    expect(wrapper).toBeTruthy();
  });

  xdescribe("initial state", () => {
    it("renders SlideLanding", () => {
      const wrapper = mount(<App />);

      expect(wrapper.find(SlideLanding).exists()).toBeTruthy();
    });

    it("renders SlideSubmitAnswer", () => {
      const wrapper = mount(<App />);

      expect(wrapper.find(SlideSubmitAnswer).exists()).toBeTruthy();
    });

    it("does NOT render SlideScore", () => {
      const wrapper = mount(<App />);

      expect(wrapper.find(SlideScore).exists()).toBeFalsy();
    });

    it("does NOT render SlideLast", () => {
      const wrapper = mount(<App />);

      expect(wrapper.find(SlideLast).exists()).toBeFalsy();
    });

    it("does NOT render SlideLoading", () => {
      const wrapper = mount(<App />);

      expect(wrapper.find(SlideLoading).exists()).toBeFalsy();
    });
  });

  describe("when user has submit the answers", () => {
    it("renders SlideLoading only on timers", () => {
      const wrapper = mount(<App />);
      jest.useFakeTimers();

      wrapper
        .find(SlideSubmitAnswer)
        .find("button")
        .simulate("click");

      expect(wrapper.find(SlideLoading).exists()).toBeTruthy();
      jest.runAllTimers();
      jest.advanceTimersByTime(3000);
      expect(wrapper.find(SlideScore).exists()).toBeTruthy();
      expect(wrapper.find(SlideLoading).exists()).toBeFalsy();
    });

    xit("renders loading for 3 seconds", () => {
      jest.useFakeTimers();
      const wrapper = mount(<App />);

      wrapper
        .find(SlideSubmitAnswer)
        .find("button")
        .simulate("click");

      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
    });

    xit("renders SlideScore", () => {
      jest.useFakeTimers();
      const wrapper = mount(<App />);

      wrapper
        .find(SlideSubmitAnswer)
        .find("button")
        .simulate("click");

      jest.runAllTimers();
      expect(wrapper.find(SlideScore).exists()).toBeTruthy();
    });
  });
});
