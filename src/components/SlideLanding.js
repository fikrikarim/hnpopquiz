import React from "react";

export default function SlideLanding(props) {
  const { onClick } = props;
  return (
    <div className="slide slide-landing">
      <h1>HN Pop Quiz</h1>
      <h2>How much do you know unimportant things about HN?</h2>
      <button onClick={onClick}>Let's go</button>
    </div>
  );
}
