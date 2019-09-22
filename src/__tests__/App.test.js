import React from "react";
import { act } from "react-dom/test-utils";
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
  it("renders without crashing", () => {
    const wrapper = mount(<App />);

    expect(wrapper).toBeTruthy();
  });

  describe("initial state", () => {
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
    jest.useFakeTimers();
    it("renders SlideLoading only on timers", () => {
      const wrapper = mount(<App />);

      wrapper
        .find(SlideSubmitAnswer)
        .find("button")
        .simulate("click");

      expect(wrapper.find(SlideLoading).exists()).toBeTruthy();
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 12000);
      act(() => {
        jest.advanceTimersByTime(12000);
      });
      wrapper.update();
      expect(wrapper.find(SlideLoading).exists()).toBeFalsy();
    });

    it("renders SlideScore", () => {
      const wrapper = mount(<App />);

      wrapper
        .find(SlideSubmitAnswer)
        .find("button")
        .simulate("click");

      act(() => {
        jest.advanceTimersByTime(12000);
      });
      wrapper.update();
      expect(wrapper.find(SlideScore).exists()).toBeTruthy();
    });
  });
});
