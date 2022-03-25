import * as Types from "../constants/actionTypes";
import { i_homeStateData } from "../types/home";
import { AxiosError } from "../types/axios";
import http from "../apis/http-common";
import { AppDispatch } from "../types/store";

export const actionGetFoodRequest = () => {
  return (dispatch: AppDispatch) => {
    http
      .get<i_homeStateData[]>("")
      .then((res) => {
        // console.log(res.data);
        dispatch(actionGetFood(res.data));
      })
      .catch((err: AxiosError) => console.log(err));
  };
};

export const actionGetFood = (foods: i_homeStateData[]) => {
  return {
    type: Types.GET_FOODS,
    payload: foods,
  };
};
