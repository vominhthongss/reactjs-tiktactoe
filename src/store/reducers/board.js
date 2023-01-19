import { SETCOLUMN, SETROW } from "../constants/action";

const initialState = { row: 3, column: 3 };
const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETCOLUMN:
      return { ...state, ...action.payload };
    case SETROW:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default boardReducer;
