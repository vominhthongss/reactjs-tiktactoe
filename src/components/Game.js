import React, { Component, useRef } from "react";
import Board from "./Board";
import "./Game.css";
import calculateWinner from "../help/calculateWinner";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
      user: {
        user1: "X",
        user2: "O",
      },
    };
    this.refUser1 = React.createRef();
    this.refUser2 = React.createRef();

    this.setUser1 = this.setUser1.bind(this);
    this.setUser2 = this.setUser2.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const user1 = this.state.user.user1;
    const user2 = this.state.user.user2;
    if (user1 === "") {
      alert("Nhập tên User 1");
      this.refUser1.current.focus();
      return;
    }
    if (user2 === "") {
      alert("Nhập tên User 2");
      this.refUser2.current.focus();
      return;
    }
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  setUser1(e) {
    this.setState({
      user: {
        ...this.state.user,
        user1: e.target.value,
      },
    });
  }

  setUser2(e) {
    this.setState({
      user: {
        ...this.state.user,
        user2: e.target.value,
      },
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button className="game-btn" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status =
        "Winner: " +
        (winner === "X" ? this.state.user.user1 : this.state.user.user2);
    } else {
      status =
        "Next player: " +
        (this.state.xIsNext ? this.state.user.user1 : this.state.user.user2);
    }

    return (
      <div className="game">
        <div>
          <div className="game-user">
            <span>User 1</span>
            <input ref={this.refUser1} type="text" onChange={this.setUser1} value={this.state.user.user1}/>
          </div>
          <div className="game-user">
            <span>User 2</span>
            <input ref={this.refUser2} type="text" onChange={this.setUser2} value={this.state.user.user2}/>
          </div>
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={this.handleClick}
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
}

export default Game;
