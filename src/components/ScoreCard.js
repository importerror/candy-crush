import React from "react";

export default function ScoreCard(props) {
  if (props.score === props.totalScore) {
    return <div className="margin-top-20">Its a perfect. Congratulations!</div>;
  }

  return <div className="margin-top-20">Your Score: {props.score}</div>;
}
