import { i_accountStateData } from "./account.d";
export interface i_accountStateData {
  _id: string;
  password: string;
  userID: string;
}

export interface i_accountActionType {
  type: string;
  payload: i_accountStateData[];
}

export interface i_account_props {
  accountData: i_accountStateData[];
  getAllAccRequest: () => void;
}
export interface i_account_error {
  value: string;
  msg: string;
  param: string;
  location: string;
}
export interface i_account_error_res {
  errors: i_account_error[];
}
export interface i_account_success_res {
  createdAccount: i_accountStateData;
  message: string;
}
