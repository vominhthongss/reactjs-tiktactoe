import { SETUSER1, SETUSER2 } from "../constants/action";

const initialState = { user1: "X", user2: "O" };
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUSER1:
      return { ...state, ...action.payload };
    case SETUSER2:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default userReducer;
