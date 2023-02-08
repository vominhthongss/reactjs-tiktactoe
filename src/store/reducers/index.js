import { combineReducers } from "redux";
import displayNestedModalReducer from "./displayNestedModal";
import boardReducer from "./board";
import gameReducer from "./game";
const allReducers = combineReducers({
  board: boardReducer,
  displayNestedModal: displayNestedModalReducer,
  game: gameReducer,
});
export default allReducers;
