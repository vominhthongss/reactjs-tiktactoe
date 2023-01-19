import { combineReducers } from "redux";
import historyReducer from "./history";
import stepNumberReducer from "./stepNumber";
import displayNestedModalReducer from "./displayNestedModal";
import xIsNextReducer from "./xIsNext";
import boardReducer from "./board";
import userReducer from "./user";
const allReducers = combineReducers({
  board: boardReducer,
  user: userReducer,
  history: historyReducer,
  stepNumber: stepNumberReducer,
  xIsNext: xIsNextReducer,
  displayNestedModal: displayNestedModalReducer,
});
export default allReducers;
