import { i_accountStateData } from "./account";
export interface i_signIn_signOut {
  signInStatus: boolean;
  account: i_accountStateData;
}
export interface i_signIn_signOut_Acc_Type {
  type: string;
  payload: i_signIn_signOut;
}
export interface i_signIn_signOut_props {
  signInData: i_signIn_signOut;
  signInRequest: () => void;
}
