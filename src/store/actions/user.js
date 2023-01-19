import { SETUSER1, SETUSER2 } from "../constants/action";

export const setUser1 = (user) => {
  return {
    type: SETUSER1,
    payload: user,
  };
};
export const setUser2 = (user) => {
  return {
    type: SETUSER2,
    payload: user,
  };
};
