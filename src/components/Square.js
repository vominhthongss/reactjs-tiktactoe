import React from "react";
import "./Square.css";

const Square = (props) => {
  if (props.value === "X") {
    return (
      <button className="square" onClick={props.onClick}>
        <span className="square-x">{props.value}</span>
      </button>
    );
  }
  return (
    <button className="square" onClick={props.onClick}>
      <span className="square-o">{props.value}</span>
    </button>
  );
};

export default Square;
