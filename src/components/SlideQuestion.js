import React from "react";

export default function SlideQuestion(props) {
  const { quiz, selectAnswer } = props;
  const { id, question, choices } = quiz;

  return (
    <div className="slide slide-question">
      <h3>{question}</h3>

      <ul>
        {choices.map(choice => (
          <li key={choice}>
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
