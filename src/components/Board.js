import React from "react";
import Box from "./Box";

export default function Board({ board, onClick }) {
  return (
    <div className="row">
      {board.map((value, idx) => {
        return (
          <div className="col-4 d-flex justify-content-center align-items-center g-3" key={idx}>
            <Box value={value} onClick={() => value === null && onClick(idx)} />
          </div>
        );
      })}
    </div>
  );
}
