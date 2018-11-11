import React, { useState, useRef } from "react";
import Slider from "react-slick";
import classNames from "classnames";
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
      [id]: {
        answer
      }
    }));
    nextSlide();
  };

  const checkAnswers = () => {
    let checkedAnswers = {};

    for (let id in answers) {
      const answer = answers[id].answer;
      const isCorrect =
        quizList.find(quiz => quiz.id === id).correctChoice === answer;

      checkedAnswers[id] = {
        answer,
        isCorrect
      };
    }

    calculateScore(checkedAnswers);
    setAnswers(checkedAnswers);
  };

  const calculateScore = checkedAnswers => {
    let totalScore = 0;

    Object.values(checkedAnswers).forEach(answer => {
      if (answer.isCorrect) {
        totalScore++;
      }
    });

    setScore(totalScore);
  };

  const submitAnswer = () => {
    checkAnswers();
    setIsAnswersSubmitted(true);
    setisLoading(true);

    setTimeout(() => {
      setisLoading(false);
    }, loadingDuration);
  };

  var sliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,

    appendDots: dots => (
      <ul>
        {dots.map(dot => {
          return React.cloneElement(dot, {
            className: classNames(dot.props.className, {
              "dot-answered": answers[dot.key] && !isAnswersSubmitted,
              "dot-correct": answers[dot.key] && answers[dot.key].isCorrect,
              "dot-wrong":
                answers[dot.key] && answers[dot.key].isCorrect === false
            })
          });
        })}
      </ul>
    )
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

      {quizList.map(quiz => (
        <SlideQuestion
          quiz={quiz}
          key={quiz.id}
          answers={answers}
          selectAnswer={selectAnswer}
          isAnswersSubmitted={isAnswersSubmitted}
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
