import React from "react";

export default function SlideQuestion(props) {
  const { question, choices } = props.quiz;
  return (
    <div className="slide slide-question">
      <h3>{question}</h3>
      <ul>
        {choices.map(choice => (
          <li key={choice}>{choice}</li>
        ))}
      </ul>
    </div>
  );
}
