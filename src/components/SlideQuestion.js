import React from "react";
import classNames from "classnames";

export default function SlideQuestion(props) {
  const { quiz, selectAnswer, answers, isAnswersSubmitted } = props;
  const { id, question, choices, correctChoice, explanation } = quiz;

  const handleOnClick = choice => {
    !isAnswersSubmitted &&
      selectAnswer({
        id,
        answer: choice
      });
  };

  const choiceClassNames = choice => {
    const isSelectedAnswer = answers[id] && answers[id].answer === choice;
    const isCorrectAnswer = choice === correctChoice;
    const isWrongAnswer = isSelectedAnswer && !isCorrectAnswer;

    return {
      "answer-selected": isSelectedAnswer && !isAnswersSubmitted,
      "answer-correct": isCorrectAnswer && isAnswersSubmitted,
      "answer-wrong": isWrongAnswer && isAnswersSubmitted
    };
  };

  return (
    <div className="slide slide-question">
      <div className="question">
        <h3>{question}</h3>
      </div>

      <ul className="choice-container">
        {choices &&
          choices.map(choice => {
            return (
              <li
                key={choice}
                className={classNames("choice-item", choiceClassNames(choice))}
              >
                <button onClick={() => handleOnClick(choice)}>{choice}</button>
              </li>
            );
          })}
      </ul>

      {isAnswersSubmitted && (
        <div className="explanation">
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}
