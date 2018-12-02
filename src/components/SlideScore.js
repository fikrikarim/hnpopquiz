import React from "react";

export default function SlideScore(props) {
  const { onClickShowAnswer, onClickTryAgain, score } = props;

  return (
    <div className="slide slide-score">
      <h1>Results:</h1>
      <h2>{score} / 10</h2>

      <button className="btn-show-answer" onClick={onClickShowAnswer}>
        Show Answers
      </button>
      <br />
      <button className="btn-try-again" onClick={onClickTryAgain}>
        Try again
      </button>
    </div>
  );
}
