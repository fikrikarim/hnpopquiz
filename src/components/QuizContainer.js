import React, { useState, useRef } from "react";
import Slider from "react-slick";
import SlideLanding from "./SlideLanding";
import SlideQuestion from "./SlideQuestion";
import SlideSubmitAnswer from "./SlideSubmitAnswer";
import quizList from "../quizList.json";

function QuizContainer() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const slider = useRef(null);

  const nextSlide = () => {
    slider.current.slickNext();
  };

  const selectAnswer = ({ id, answer }) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [id]: answer
    }));
    nextSlide();
  };

  const calculateScore = () => {
    let correctAnswer = 0;
    quizList.forEach(quiz => {
      if (answers[quiz.id] === quiz.correctChoice) {
        correctAnswer++;
      }
    });

    setScore(correctAnswer);
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
        <SlideQuestion quiz={quiz} key={quiz.id} selectAnswer={selectAnswer} />
      ))}

      <SlideSubmitAnswer onClick={calculateScore} />
    </Slider>
  );
}

export default QuizContainer;
