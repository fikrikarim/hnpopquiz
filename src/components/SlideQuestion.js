import React from "react";

export default function SlideQuestion(props) {
  const { question, choices } = props.quiz;
  return (
    <React.Fragment>
      <h3>{question}</h3>
      <ul>
        {choices.map(choice => (
          <li>{choice}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}
