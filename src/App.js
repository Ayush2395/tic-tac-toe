import React, { useState } from "react";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  // const [message, setMessage] = useState({ error: false, msg: "" });

  const WINNING_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleChangeValue = (boxIdx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updateBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    setBoard(updateBoard);
    setXPlaying(!xPlaying);
  };

  const resetGame = () => {
    setGameOver(false);
    setScores({ xScore: 0, oScore: 0 });
    setXPlaying(true);
    setBoard(Array(9).fill(null));
  };

  const checkWinner = (box) => {
    for (let index = 0; index < WINNING_CONDITION.length; index++) {
      const [x, y, z] = WINNING_CONDITION[index];
      if (box[x] && box[x] === box[y] && box[y] === box[z]) {
        setGameOver(true);
        return box[x];
      }
    }
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-50">
          <Scoreboard scores={scores} xPlaying={xPlaying} />
          <Board
            board={board}
            onClick={gameOver ? resetGame : handleChangeValue}
          />
          <button
            className="btn btn-primary w-100 my-4 fs-2"
            onClick={resetGame}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
