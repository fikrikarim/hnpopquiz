import React from "react";

export default function SlideScore(props) {
  const { onClickShowAnswer, score } = props;

  return (
    <div className="slide slide-score">
      <h1>Score:</h1>
      <h2>{score} / 10</h2>

      <button
        id="showAnswer"
        className="pure-button pure-button-primary"
        onClick={onClickShowAnswer}
      >
        Show Answers
      </button>

      <br />
      <br />

      <h4>If you want to try again, just refresh this page.</h4>
    </div>
  );
}
