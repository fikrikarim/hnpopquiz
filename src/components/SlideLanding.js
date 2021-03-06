import React from "react";

export default function SlideLanding(props) {
  const { onClick } = props;

  return (
    <div className="slide slide-landing">
      <h1>HN Pop Quiz</h1>
      <h2>How much useless things do you know about HackerNews?</h2>

      <button className="pure-button pure-button-primary" onClick={onClick}>
        Let's go
      </button>
    </div>
  );
}
