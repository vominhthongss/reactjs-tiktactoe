import React from "react";
import Square from "../Square";
import "./style.css";
import { useSelector } from "react-redux";
function Board(props) {
  const row = useSelector((state) => state.board.row);
  const column = useSelector((state) => state.board.column);
  let count = 0;
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  };

  const boardRow = [];
  for (var i = 0; i < column; i++) {
    const _row = [];
    for (var j = 0; j < row; j++) {
      _row.push(renderSquare(count));
      count++;
    }
    boardRow.push(
      <div className="board-row" key={i}>
        {_row}
      </div>
    );
  }

  return <div className="board-main">{boardRow} </div>;
}

export default Board;
