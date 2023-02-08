import React, { useRef } from "react";
import Board from "../Board";
import "./style.css";
import calculateWinner from "../../help/calculateWinner";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { setRow } from "../../store/actions/board";
import { setColumn } from "../../store/actions/board";
import {
  handleClick,
  handleRestart,
  jumpTo,
  setUser1,
  setUser2,
} from "../../store/actions/game";
import NestedModal from "../NestedModal";
import { showNestedModal } from "../../store/actions/displayNestedModal";

const useStylesTextField1 = makeStyles(() => ({
  root: {
    "& label": {
      color: "green",
    },
    "& label.Mui-focused": {
      color: "green",
    },
    "& input": {
      color: "red",
      fontSize: 14,
      fontWeight: 600,
    },
    "& .Mui-focused input": {},
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
}));
const useStylesTextField2 = makeStyles(() => ({
  root: {
    color: "blue",
    "& label": {
      color: "green",
    },
    "& label.Mui-focused": {
      color: "green",
    },
    "& input": {
      color: "blue",
      fontSize: 14,
      fontWeight: 600,
    },
    "& .Mui-focused input": {},
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
}));

function Game() {
  const row = useSelector((state) => state.board.row);
  const column = useSelector((state) => state.board.column);

  const history = useSelector((state) => state.game.history);
  const stepNumber = useSelector((state) => state.game.stepNumber);
  const xIsNext = useSelector((state) => state.game.xIsNext);
  const user1 = useSelector((state) => state.game.user.user1);
  const user2 = useSelector((state) => state.game.user.user2);
  const dispatch = useDispatch();

  const refUser1 = useRef(null);
  const refUser2 = useRef(null);
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares, row, column);
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move} className="game-btn" id={move}>
        <Button
          onClick={() => dispatch(jumpTo(move))}
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

  let status;
  if (winner) {
    status = "Winner: " + (winner === "X" ? user1 : user2) + "🥳🥳🥳🥳";
    dispatch(showNestedModal());
  } else {
    status = "Next player: " + (xIsNext ? user1 : user2);
  }

  const classes1 = useStylesTextField1();
  const classes2 = useStylesTextField2();
  const CustomSelect = styled(Select)(() => ({
    color: "black",
    fontSize: 14,
    fontWeight: 600,
    "&.MuiOutlinedInput-root": {
      "& fieldset": {},
      "&:hover fieldset": {},
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  }));

  return (
    <div>
      <div className="game-title">TIC TAC TOE</div>
      <div>
        <NestedModal
          user={
            user1 === ""
              ? "User 1"
              : user2 === ""
              ? "User 2"
              : !xIsNext
              ? user1
              : user2
          }
          winner={winner}
        />
      </div>
      <div className="game">
        <div className="game-content">
          <div className="game-user">
            <TextField
              classes={classes1}
              className="mui-textfield"
              inputRef={refUser1}
              label="User 1"
              variant="outlined"
              onChange={(e) => dispatch(setUser1({ user1: e.target.value }))}
              value={user1}
            />
          </div>
          <div className="game-user">
            <TextField
              classes={classes2}
              className="mui-textfield"
              inputRef={refUser2}
              label="User 2"
              variant="outlined"
              onChange={(e) => dispatch(setUser2({ user2: e.target.value }))}
              value={user2}
            />
          </div>
          <div className="game-user">
            <CustomSelect
              placeholder="Board size"
              className="mui-select"
              value={row}
              label="Label"
              onChange={(e) => {
                dispatch(setRow({ row: e.target.value }));
                dispatch(setColumn({ column: e.target.value }));
              }}
            >
              {options}
            </CustomSelect>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol className="step">{moves}</ol>
          </div>
        </div>

        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => {
              const element = document.getElementById(stepNumber);
              element.scrollIntoView({ behavior: "smooth" });
              if (user1 === "") {
                dispatch(showNestedModal());
                refUser1.current.focus();
                return;
              }
              if (user2 === "") {
                dispatch(showNestedModal());
                refUser2.current.focus();
                return;
              }
              const historyTemp = history.slice(0, stepNumber + 1);
              const current = historyTemp[historyTemp.length - 1];
              const squares = current.squares.slice();
              if (calculateWinner(squares, row, column) || squares[i]) {
                return;
              }
              dispatch(handleClick(i));
            }}
          />
        </div>
        <div className="game-info">
          <Button
            variant="contained"
            color="success"
            onClick={() => dispatch(handleRestart())}
          >
            Restart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Game;
