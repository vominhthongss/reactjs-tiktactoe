import React from "react";
import Square from "./Square";
import "./Board.css";
function Board(props) {
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
  for (var i = 0; i < props.column; i++) {
    const row = [];
    for (var j = 0; j < props.row; j++) {
      row.push(renderSquare(count));
      count++;
    }
    boardRow.push(
      <div className="board-row" key={i}>
        {row}
      </div>
    );
  }

  return <div className="board-main">{boardRow}</div>;
}

export default Board;
