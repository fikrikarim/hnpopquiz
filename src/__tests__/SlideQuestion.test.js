import React from "react";
import { shallow } from "enzyme";

import SlideQuestion from "../components/SlideQuestion";

describe("<SlideQuestion />", () => {
  it("renders with class 'slide-question'", () => {
    const wrapper = shallow(<SlideQuestion quiz={{}} userAnswers={{}} />);

    expect(wrapper.hasClass("slide-question")).toBeTruthy();
  });

  it("renders the question", () => {
    const question = "How you doin'?";
    const wrapper = shallow(
      <SlideQuestion quiz={{ question }} userAnswers={{}} />
    );

    expect(wrapper.find(".question").contains(question)).toBeTruthy();
  });

  it("renders each choices", () => {
    const choices = ["I'm good", "I've just got flu"];
    const wrapper = shallow(
      <SlideQuestion quiz={{ choices }} userAnswers={{}} />
    );

    expect(wrapper.find("li").length).toEqual(2);
    expect(wrapper.find(".choice-container").contains(choices[0])).toBeTruthy();
    expect(wrapper.find(".choice-container").contains(choices[1])).toBeTruthy();
  });

  describe("when user has NOT submitted the answer", () => {
    it("does NOT render the explanation", () => {
      const wrapper = shallow(
        <SlideQuestion isAnswersSubmitted={false} quiz={{}} userAnswers={{}} />
      );

      expect(wrapper.find(".explanation").length).toEqual(0);
    });

    it("calls selectAnswer prop when an answer is clicked", () => {
      const selectAnswer = jest.fn();
      const wrapper = shallow(
        <SlideQuestion
          isAnswersSubmitted={false}
          quiz={{ id: "1", choices: ["I'm good"] }}
          userAnswers={{}}
          selectAnswer={selectAnswer}
        />
      );

      wrapper.find("li").simulate("click");

      expect(selectAnswer).toBeCalledWith({ id: "1", answer: "I'm good" });
    });

    it("choice has 'answer-selected' class when it is selected", () => {
      const userAnswers = { "1": { answer: "I'm good" } };
      const wrapper = shallow(
        <SlideQuestion
          isAnswersSubmitted={false}
          quiz={{ id: "1", choices: ["I'm good"] }}
          userAnswers={userAnswers}
        />
      );

      expect(wrapper.find("li").hasClass("answer-selected")).toBeTruthy();
    });

    it("choice does NOT have 'answer-correct' class when it is correct", () => {
      const userAnswers = { "1": { answer: "I'm good" } };
      const quiz = {
        id: "1",
        choices: ["I'm good"],
        correctChoice: "I'm good"
      };
      const wrapper = shallow(
        <SlideQuestion
          isAnswersSubmitted={false}
          quiz={quiz}
          userAnswers={userAnswers}
        />
      );

      expect(wrapper.find("li").hasClass("answer-correct")).toBeFalsy();
    });

    it("choice does NOT have 'answer-wrong' class when it is wrong", () => {
      const userAnswers = { "1": { answer: "I'm good" } };
      const quiz = {
        id: "1",
        choices: ["I'm good"],
        correctChoice: "I've just got flu"
      };
      const wrapper = shallow(
        <SlideQuestion
          isAnswersSubmitted={false}
          quiz={quiz}
          userAnswers={userAnswers}
        />
      );

      expect(wrapper.find("li").hasClass("answer-wrong")).toBeFalsy();
    });
  });

  describe("when user has submitted the answer", () => {
    it("renders the explanation", () => {
      const explanation = "Because that's the correct answer";
      const wrapper = shallow(
        <SlideQuestion
          isAnswersSubmitted={true}
          quiz={{ explanation }}
          userAnswers={{}}
        />
      );

      expect(wrapper.find(".explanation").text()).toEqual(explanation);
    });

    it("does NOT call selectAnswer prop when an answer is clicked", () => {
      const selectAnswer = jest.fn();
      const wrapper = shallow(
        <SlideQuestion
          isAnswersSubmitted={false}
          quiz={{ choices: ["I'm good"] }}
          userAnswers={{}}
          selectAnswer={selectAnswer}
        />
      );

      wrapper.find("li").simulate("click");

      expect(selectAnswer).toBeCalled();
    });

    it("choice has 'answer-selected' class when it is selected", () => {
      const userAnswers = { "1": { answer: "I'm good" } };
      const wrapper = shallow(
        <SlideQuestion
          isAnswersSubmitted={true}
          quiz={{ id: "1", choices: ["I'm good"] }}
          userAnswers={userAnswers}
        />
      );

      expect(wrapper.find("li").hasClass("answer-selected")).toBeFalsy();
    });

    it("choice has 'answer-correct' class when it is correct", () => {
      const userAnswers = { "1": { answer: "I'm good" } };
      const quiz = {
        id: "1",
        choices: ["I'm good"],
        correctChoice: "I'm good"
      };
      const wrapper = shallow(
        <SlideQuestion
          isAnswersSubmitted={true}
          quiz={quiz}
          userAnswers={userAnswers}
        />
      );

      expect(wrapper.find("li").hasClass("answer-correct")).toBeTruthy();
    });

    it("choice has 'answer-wrong' class when it is wrong", () => {
      const userAnswers = { "1": { answer: "I'm good" } };
      const quiz = {
        id: "1",
        choices: ["I'm good"],
        correctChoice: "I've just got flu"
      };
      const wrapper = shallow(
        <SlideQuestion
          isAnswersSubmitted={true}
          quiz={quiz}
          userAnswers={userAnswers}
        />
      );

      expect(wrapper.find("li").hasClass("answer-wrong")).toBeTruthy();
    });
  });
});
