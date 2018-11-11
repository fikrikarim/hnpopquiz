import React from "react";
import classNames from "classnames";

export default function SlideQuestion(props) {
  const { quiz, selectAnswer, answers } = props;
  const { id, question, choices } = quiz;

  return (
    <div className="slide slide-question">
      <h3>{question}</h3>

      <ul>
        {choices.map(choice => (
          <li
            key={choice}
            className={classNames({
              "answer-selected": answers[id] === choice
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
        ))}
      </ul>
    </div>
  );
}
