import React from "react";

export default function SlideSubmitAnswer(props) {
  const { onClick } = props;
  return (
    <div className="slide slide-submit-answer">
      <h2>Congratulation on finishing the quiz</h2>

      <button onClick={onClick}>Click here to submit your answer</button>
    </div>
  );
}
