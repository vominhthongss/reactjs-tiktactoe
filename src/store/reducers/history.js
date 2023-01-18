const historyReducer = (
  state = [{ squares: Array(10 * 10).fill(null) }],
  action
) => {
  switch (action.type) {
    case "SETHISTORY":
      return [...state, action.payload];

    default:
      return state;
  }
};
export default historyReducer;
