import React from "react";
import classNames from "classnames";

export default function SlideQuestion(props) {
  const { quiz, selectAnswer, answers, isAnswersSubmitted } = props;
  const { id, question, choices, correctChoice, explanation } = quiz;

  return (
    <div className="slide slide-question">
      <h3>{question}</h3>

      <ul>
        {choices.map(choice => {
          const isSelectedAnswer = answers[id] && answers[id].answer === choice;
          const isCorrectAnswer = choice === correctChoice;
          const isWrongAnswer = isSelectedAnswer && !isCorrectAnswer;

          return (
            <li
              key={choice}
              className={classNames({
                "answer-selected": isSelectedAnswer && !isAnswersSubmitted,
                "answer-correct": isCorrectAnswer && isAnswersSubmitted,
                "answer-wrong": isWrongAnswer && isAnswersSubmitted
              })}
            >
              <button
                onClick={() =>
                  selectAnswer({
                    id,
                    answer: choice
                  })
                }
              >
                {choice}
              </button>
            </li>
          );
        })}
      </ul>

      {isAnswersSubmitted && (
        <div>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}
