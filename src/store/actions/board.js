import { SETCOLUMN, SETROW } from "../constants/action";

export const setColumn = (column) => {
  return {
    type: SETCOLUMN,
    payload: column,
  };
};
export const setRow = (row) => {
  return {
    type: SETROW,
    payload: row,
  };
};
