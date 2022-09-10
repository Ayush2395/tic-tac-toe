import React from "react";

export default function Scoreboard({ score, xPlaying }) {
  const { xScores, oScores } = score;
  return (
    <>
      <div className="scoreboard">
        <span className={`score x-score ${!xPlaying && "inactive"}`}>
          X - {xScores}
        </span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>
          O - {oScores}
        </span>
      </div>
    </>
  );
}
