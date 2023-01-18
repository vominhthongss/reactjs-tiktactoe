const xIsNextReducer = (state = true, action) => {
  switch (action.type) {
    case "SETXISNEXT":
      return !state;

    default:
      return state;
  }
};
export default xIsNextReducer;
