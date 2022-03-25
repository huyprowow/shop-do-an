import { i_homeStateData, i_actionType } from "../types/home";
import * as Types from "../constants/actionTypes";

const initialState: i_homeStateData[] = [];
//k gan truc tiep initialState = [] dc vi ty se suy no thanh kieu any[]
// vi typescript k biet nhung j co trong mang => nhap duoi dang the hien i_homeStateData[]

export const homeReducer = (
  state: i_homeStateData[] = initialState,
  action: i_actionType
) => {
  switch (action.type) {
    case Types.GET_FOODS:
      state = action.payload;
      return [...state];

    // break;

    default:
      return [...state];
  }
};
