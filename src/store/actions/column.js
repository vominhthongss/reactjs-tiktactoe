export const setColumn = (column) => {
  return {
    type: "SETCOLUMN",
    payload: column,
  };
};
