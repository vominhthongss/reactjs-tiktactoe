import { HIDENESTEDMODAL, SHOWNESTEDMODAL } from "../constants/action";

const initialState = false;
const displayNestedModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOWNESTEDMODAL:
      return true;
    case HIDENESTEDMODAL:
      return false;
    default:
      return state;
  }
};
export default displayNestedModalReducer;
