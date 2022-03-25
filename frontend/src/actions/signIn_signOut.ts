import * as Types from "../constants/actionTypes";
import { i_accountStateData } from "../types/account";

export const actionSignIn = (signInStatus: boolean, account: i_accountStateData) => {
  return {
    type: Types.USER_SIGN_IN,
    payload: {
      signInStatus: signInStatus,
      account: account,
    },
  };
};
export const actionSignOut = (signInStatus: boolean, account: i_accountStateData) => {
    return {
      type: Types.USER_SIGN_IN,
      payload: {
        signInStatus: signInStatus,
        account: account,
      },
    };
  };
