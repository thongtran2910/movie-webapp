import { SET_CURRENT_USER } from "../constants/userConstant";

const initialState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      state.currentUser = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
