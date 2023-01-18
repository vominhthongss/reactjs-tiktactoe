const rowReducer = (state = 3, action) => {
  switch (action.type) {
    case "SETROW":
      return action.payload;
    default:
      return state;
  }
};
export default rowReducer;
