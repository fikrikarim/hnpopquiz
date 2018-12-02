import React, { useState, useRef } from "react";
import Slider from "react-slick";
import classNames from "classnames";
import SlideLanding from "./components/SlideLanding";
import SlideScore from "./components/SlideScore";
import SlideQuestion from "./components/SlideQuestion";
import SlideSubmitAnswer from "./components/SlideSubmitAnswer";
import SlideLast from "./components/SlideLast";
import SlideLoading from "./components/SlideLoading";
import quizList from "./quizList.json";

function App() {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isAnswersSubmitted, setIsAnswersSubmitted] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const slider = useRef(null);
  const loadingDuration = 3000;

  const nextSlide = () => {
    slider.current.slickNext();
  };

  const selectAnswer = ({ id, answer }) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [id]: {
        answer
      }
    }));
    nextSlide();
  };

  const checkAnswers = () => {
    let checkedAnswers = {};

    for (let id in userAnswers) {
      const answer = userAnswers[id].answer;
      const isCorrect =
        quizList.find(quiz => quiz.id === id).correctChoice === answer;

      checkedAnswers[id] = {
        answer,
        isCorrect
      };
    }

    calculateScore(checkedAnswers);
    setUserAnswers(checkedAnswers);
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
              "dot-answered": userAnswers[dot.key] && !isAnswersSubmitted,
              "dot-correct":
                userAnswers[dot.key] && userAnswers[dot.key].isCorrect,
              "dot-wrong":
                userAnswers[dot.key] && userAnswers[dot.key].isCorrect === false
            })
          });
        })}
      </ul>
    )
  };

  return isLoading ? (
    <SlideLoading />
  ) : (
    <Slider ref={slider} {...sliderSettings}>
      {isAnswersSubmitted ? (
        <SlideScore score={score} onClickShowAnswer={nextSlide} />
      ) : (
        <SlideLanding onClick={nextSlide} />
      )}

      {quizList.map(quiz => (
        <SlideQuestion
          quiz={quiz}
          key={quiz.id}
          userAnswers={userAnswers}
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

export default App;
