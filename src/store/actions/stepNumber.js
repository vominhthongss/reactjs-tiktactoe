import { SETSTEPNUMBER } from "../constants/action";

export const setStepNumber = (number) => {
  return {
    type: SETSTEPNUMBER,
    payload: number,
  };
};
