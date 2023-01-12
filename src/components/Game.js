import React, { useRef, useState } from "react";
import Board from "./Board";
import "./Game.css";
import calculateWinner from "../help/calculateWinner";

function Game() {
  const [row, setRow] = useState(3);
  const [column, setColumn] = useState(3);
  const [history, setHistory] = useState([
    { squares: Array(15 * 15).fill(null) },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [user1, setUser1] = useState("X");
  const [user2, setUser2] = useState("O");
  const refUser1 = useRef(null);
  const refUser2 = useRef(null);
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares, row, column);
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button className="game-btn" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });
  const options = [3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
    <option value={x}>
      {x} x {x}
    </option>
  ));

  const handleClick = (i) => {
    const historyTemp = history.slice(0, stepNumber + 1);
    const current = historyTemp[historyTemp.length - 1];
    const squares = current.squares.slice();
    if (user1 === "") {
      alert("Nhập tên User 1");
      refUser1.current.focus();
      return;
    }
    if (user2 === "") {
      alert("Nhập tên User 2");
      refUser2.current.focus();
      return;
    }
    if (calculateWinner(squares, row, column) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(history.concat([{ squares: squares }]));
    setXIsNext(!xIsNext);
    setStepNumber(history.length);
  };

  const jumpTo = (step) => {
    setXIsNext(step % 2 === 0);
    setStepNumber(step);
  };

  const setUser = (name, value) => {
    if (name === "user1") {
      setUser1(value);
    } else {
      setUser2(value);
    }
  };

  const setBoard = (value) => {
    setRow(value);
    setColumn(value);
  };

  let status;
  if (winner) {
    status = "Winner: " + (winner === "X" ? user1 : user2) + "🥳🥳🥳🥳";
  } else {
    status = "Next player: " + (xIsNext ? user1 : user2);
  }
  return (
    <div className="game">
      <div className="game-content">
        <div className="game-user">
          <span>User 1</span>
          <input
            className="user1"
            ref={refUser1}
            type="text"
            onChange={(e) => setUser("user1", e.target.value)}
            value={user1}
          />
        </div>
        <div className="game-user">
          <span>User 2</span>
          <input
            className="user2"
            ref={refUser2}
            type="text"
            onChange={(e) => setUser("user2", e.target.value)}
            value={user2}
          />
        </div>
        <div className="game-user">
          <span>Board size</span>

          <select
            onChange={(e) => {
              setBoard(e.target.value);
            }}
          >
            {options}
          </select>
        </div>
        <div className="game-board">
          <Board
            squares={current.squares}
            row={row}
            column={column}
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
