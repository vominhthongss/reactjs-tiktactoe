import {
  HANDLECLICK,
  HANDLERESTART,
  JUMPTO,
  SETUSER1,
  SETUSER2,
} from "../constants/action";

const initialState = {
  history: [{ squares: Array(10 * 10).fill(null) }],
  stepNumber: 0,
  user: { user1: "X", user2: "O" },
  xIsNext: true,
};
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUSER1:
      return { ...state, user: { ...state.user, ...action.payload } };
    case SETUSER2:
      return { ...state, user: { ...state.user, ...action.payload } };
    case HANDLECLICK:
      const historyTemp = state.history.slice(0, state.stepNumber + 1);
      const current = historyTemp[historyTemp.length - 1];
      const squares = current.squares.slice();
      squares[action.payload] = state.xIsNext ? "X" : "O";
      return {
        ...state,
        history: [...state.history, { squares: squares }],
        xIsNext: !state.xIsNext,
        stepNumber: state.history.length,
      };
    case HANDLERESTART:
      return {
        ...state,
        history: [{ squares: Array(9).fill(null) }],
        stepNumber: 0,
      };
    case JUMPTO:
      return { ...state, stepNumber: action.payload };
    default:
      return state;
  }
};
export default gameReducer;
