import { SET_CURRENT_USER } from "../constants/userConstant";

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
