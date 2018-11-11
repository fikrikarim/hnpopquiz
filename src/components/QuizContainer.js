import React, { useRef } from "react";
import Slider from "react-slick";
import SlideLanding from "./SlideLanding";
import SlideQuestion from "./SlideQuestion";
import quizList from "../quizList.json";

function QuizContainer() {
  const slider = useRef(null);

  const nextSlide = () => {
    slider.current.slickNext();
  };

  var sliderSettings = {
    dots: true,
    infinite: false,
    arrows: false
  };

  return (
    <Slider ref={slider} {...sliderSettings}>
      <SlideLanding onClick={nextSlide} />

      {quizList.map(quiz => (
        <SlideQuestion quiz={quiz} key={quiz.question} />
      ))}
    </Slider>
  );
}

export default QuizContainer;
