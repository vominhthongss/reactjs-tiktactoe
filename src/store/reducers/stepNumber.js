const stepNumberReducer = (state = 0, action) => {
  switch (action.type) {
    case "SETSTEPNUMBER":
      return action.payload;

    default:
      return state;
  }
};
export default stepNumberReducer;
