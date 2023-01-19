import { SETHISTORY } from "../constants/action";

const initialState = [{ squares: Array(10 * 10).fill(null) }];
const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETHISTORY:
      return [...state, action.payload];

    default:
      return state;
  }
};
export default historyReducer;
