import React, { useState, useRef } from "react";
import Slider from "react-slick";
import SlideLanding from "./SlideLanding";
import SlideScore from "./SlideScore";
import SlideQuestion from "./SlideQuestion";
import SlideSubmitAnswer from "./SlideSubmitAnswer";
import SlideLast from "./SlideLast";
import PageLoading from "./PageLoading";
import quizList from "../quizList.json";

function QuizContainer() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isAnswersSubmitted, setIsAnswersSubmitted] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const slider = useRef(null);
  const loadingDuration = 3000;

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

  const submitAnswer = () => {
    calculateScore();
    setIsAnswersSubmitted(true);
    setisLoading(true);

    setTimeout(() => {
      setisLoading(false);
    }, loadingDuration);
  };

  var sliderSettings = {
    dots: true,
    infinite: false,
    arrows: false
  };

  return isLoading ? (
    <PageLoading />
  ) : (
    <Slider ref={slider} {...sliderSettings}>
      {isAnswersSubmitted ? (
        <SlideScore score={score} onClick={nextSlide} />
      ) : (
        <SlideLanding onClick={nextSlide} />
      )}

      {isAnswersSubmitted
        ? quizList.map(quiz => (
            <SlideQuestion
              quiz={quiz}
              key={quiz.id}
              selectAnswer={selectAnswer}
            />
          ))
        : quizList.map(quiz => (
            <SlideQuestion
              quiz={quiz}
              key={quiz.id}
              selectAnswer={selectAnswer}
            />
          ))}

      {isAnswersSubmitted ? (
        <SlideLast />
      ) : (
        <SlideSubmitAnswer onClick={submitAnswer} />
      )}
    </Slider>
  );
}

export default QuizContainer;
