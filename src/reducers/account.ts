import { i_accountStateData, i_accountActionType } from "../types/account";
import * as Types from "../constants/actionTypes";

const initialState: i_accountStateData[] = [];

export const accountReducer = (
  state: i_accountStateData[] = initialState,
  action: i_accountActionType
) => {
  switch (action.type) {
    case Types.GET_ACCOUNT:
      state = action.payload;
      return [...state];
    break;
    case Types.ADD_ACCOUNT:
      const newAccount=action.payload;
      return [...state,newAccount];

    default:
      return [...state];
  }
};
