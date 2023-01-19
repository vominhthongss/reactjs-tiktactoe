import { SETHISTORY } from "../constants/action";

export const setHistory = (history) => {
  return {
    type: SETHISTORY,
    payload: history,
  };
};
