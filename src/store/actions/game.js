import {
  HANDLECLICK,
  HANDLERESTART,
  JUMPTO,
  SETUSER1,
  SETUSER2,
} from "../constants/action";

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

export const handleClick = (i) => {
  return {
    type: HANDLECLICK,
    payload: i,
  };
};

export const handleRestart = () => {
  return {
    type: HANDLERESTART,
  };
};

export const jumpTo = (step) => {
  return {
    type: JUMPTO,
    payload: step,
  };
};
