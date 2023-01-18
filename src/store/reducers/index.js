import { combineReducers } from "redux";
import columnReducer from "./column";
import historyReducer from "./history";
import rowReducer from "./row";
import stepNumberReducer from "./stepNumber";
import displayNestedModalReducer from "./displayNestedModal";
import xIsNextReducer from "./xIsNext";
const allReducers = combineReducers({
  row: rowReducer,
  column: columnReducer,
  history: historyReducer,
  stepNumber: stepNumberReducer,
  xIsNext: xIsNextReducer,
  displayNestedModal: displayNestedModalReducer,
});
export default allReducers;
