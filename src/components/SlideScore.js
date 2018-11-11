import React from "react";

export default function SlideLanding(props) {
  const { onClick, score } = props;
  return (
    <div className="slide slide-landing">
      <h1>Results:</h1>
      <h2>{score} / 10</h2>

      <button onClick={onClick}>Show Answers</button>
      <br />
      <button onClick={() => console.log("try again")}>Try again</button>
    </div>
  );
}
