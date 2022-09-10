import React, { useState } from "react";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScores: 0, oScores: 0 });
  const [gameOver, setGameOver] = useState(false);

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
        let { oScores } = scores;
        oScores += 1;
        setScores({ ...scores, oScores });
      } else {
        let { xScores } = scores;
        xScores += 1;
        setScores({ ...scores, xScores });
      }
    }

    setBoard(updateBoard);
    setXPlaying(!xPlaying);
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  const checkWinner = (board) => {
    for (let index = 0; index < WINNING_CONDITION.length; index++) {
      const [x, y, z] = WINNING_CONDITION[index];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  return (
    <>
      <Scoreboard score={scores} xPlaying={xPlaying} />
      <Board
        board={board}
        onClick={gameOver ? resetBoard : handleChangeValue}
      />
      <button className="reset-btn" onClick={resetBoard}>
        Reset
      </button>
    </>
  );
}
