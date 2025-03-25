import { useState } from "react";
import "../index.css";
import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const { board, handleClick, getStatus, resetGame, calculateWinner } =
    useTicTacToe();
  console.log(board);

  return (
    <>
      <div className="game">
        <div className="status">
          {getStatus()}
          <button className="reset" onClick={resetGame}>
            Reset
          </button>
        </div>
        <div className="board">
          {board.map((b, i) => {
            return (
              <button
                className="cell"
                key={i}
                onClick={() => handleClick(i)}
                disabled={b !== null}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
