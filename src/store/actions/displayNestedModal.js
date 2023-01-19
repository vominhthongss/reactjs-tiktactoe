import { HIDENESTEDMODAL, SHOWNESTEDMODAL } from "../constants/action";

export const showNestedModal = () => {
  return {
    type: SHOWNESTEDMODAL,
  };
};
export const hideNestedModal = () => {
  return {
    type: HIDENESTEDMODAL,
  };
};
