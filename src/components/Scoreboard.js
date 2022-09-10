import React from "react";

export default function Scoreboard({ xPlaying, scores }) {
  let { xScore, oScore } = scores;
  return (
    <>
      <div className="container d-flex justify-content-evenly align-items-center mb-3 fs-2 bg-light p-1 rounded-4 shadow w-75">
        <span
          className={`text-danger  w-50 text-center rounded-4  ${
            xPlaying &&
            "border border-2 border-end-0 border-top-0 border-start-0 border-danger"
          }`}
        >
          X - {xScore}
        </span>
        <span
          className={`text-primary w-50 text-center rounded-4 ${
            !xPlaying &&
            "border border-2 border-end-0 border-top-0 border-start-0 border-primary"
          }`}
        >
          O - {oScore}
        </span>
      </div>
    </>
  );
}
