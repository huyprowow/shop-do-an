import * as Types from "../constants/actionTypes";
import { i_accountStateData} from "../types/account";
import { AxiosError } from "../types/axios";
import http from "../apis/http-common";
import { AppDispatch } from "../types/store";

export const actionGetAccRequest = () => {
  return (dispatch: AppDispatch) => {
    http
      .get<i_accountStateData[]>("/accounts")
      .then((res) => {
        // console.log(res.data);
        dispatch(actionGetAcc(res.data));
      })
      .catch((err: AxiosError) => console.log(err));
  };
};

export const actionGetAcc = (accounts: i_accountStateData[]) => {
  return {
    type: Types.GET_ACCOUNT,
    payload: accounts,
  };
};

export const actionAddAcc = (newAccount: i_accountStateData) => {
  return {
    type: Types.ADD_ACCOUNT,
    payload: newAccount,
  };
};
