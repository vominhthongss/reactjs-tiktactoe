import { SETSTEPNUMBER } from "../constants/action";

const initialState = 0;
const stepNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETSTEPNUMBER:
      return action.payload;

    default:
      return state;
  }
};
export default stepNumberReducer;
