import React from "react";
import Box from "./Box";

export default function Board({ board, onClick }) {
  return (
    <div className="row justify-content-start">
      {board.map((value, idx) => {
        return (
          <div className="col-4 g-3 align-self-end" key={idx}>
            <Box value={value} onClick={() => value === null && onClick(idx)} />
          </div>
        );
      })}
    </div>
  );
}
