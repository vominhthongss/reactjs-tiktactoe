import { SETXISNEXT } from "../constants/action";

const initialState = true;
const xIsNextReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETXISNEXT:
      return !state;

    default:
      return state;
  }
};
export default xIsNextReducer;
