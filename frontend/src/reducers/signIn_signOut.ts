import {
  i_signIn_signOut,
  i_signIn_signOut_Acc_Type,
} from "../types/signIn_signOut";
import * as Types from "../constants/actionTypes";

const initialState: i_signIn_signOut = {
  //
  //  isAuthenticated: localStorage.getItem('token') ? true : false
  signInStatus: localStorage.getItem('token')? true : false,
  account: {
    _id: "",
    userID: "",
    password: "",
  },
};

export const signInReducer = (
  state: i_signIn_signOut = initialState,
  action: i_signIn_signOut_Acc_Type
) => {
  switch (action.type) {
    case Types.USER_SIGN_IN:
      state = action.payload;
      return state;
      break;
    case Types.USER_SIGN_OUT:
      return initialState;

    default:
      return state;
  }
};
