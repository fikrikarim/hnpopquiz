import React from "react";

export default function SlideSubmitAnswer(props) {
  const { onClick } = props;

  return (
    <div className="slide slide-submit-answer">
      <h2>You're done!</h2>

      <br />

      <button className="pure-button pure-button-primary" onClick={onClick}>
        Submit your answer
      </button>
    </div>
  );
}
