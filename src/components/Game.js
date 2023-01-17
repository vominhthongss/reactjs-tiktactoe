import React, { useRef, useState } from "react";
import Board from "./Board";
import "./Game.css";
import calculateWinner from "../help/calculateWinner";
import { Button, MenuItem, Select, TextField } from "@mui/material";

function Game() {
  const [row, setRow] = useState(3);
  const [column, setColumn] = useState(3);
  const [history, setHistory] = useState([
    { squares: Array(10 * 10).fill(null) },
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
      <li key={move} className="game-btn">
        <Button
          onClick={() => jumpTo(move)}
          variant="contained"
          color="success"
        >
          {desc}
        </Button>
      </li>
    );
  });
  const options = [3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
    <MenuItem key={x} value={x}>
      {x} x {x}
    </MenuItem>
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
    <div>
      <div className="game-title">TIC TAC TOE</div>
      <div className="game">
        <div className="game-content">
          <div className="game-user">
            <TextField
              className="mui-textfield"
              inputRef={refUser1}
              label="User 1"
              variant="outlined"
              onChange={(e) => setUser("user1", e.target.value)}
              value={user1}
            />
          </div>
          <div className="game-user">
            <TextField
              className="mui-textfield"
              inputRef={refUser2}
              label="User 2"
              variant="outlined"
              onChange={(e) => setUser("user2", e.target.value)}
              value={user2}
            />
          </div>
          <div className="game-user">
            <Select
              className="mui-select"
              value={row}
              label="Board size"
              onChange={(e) => {
                setBoard(e.target.value);
              }}
            >
              {options}
            </Select>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol className="step">{moves}</ol>
          </div>
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
    </div>
  );
}

export default Game;
