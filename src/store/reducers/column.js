const columnReducer = (state = 3, action) => {
  switch (action.type) {
    case "SETCOLUMN":
      return action.payload;
    default:
      return state;
  }
};
export default columnReducer;
