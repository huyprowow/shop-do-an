//i_ :inteface
export interface i_homeStateData {
  _id: string;
  name: string;
  price: number;
  image: string;
  type: string;
  status: boolean;
}

export interface i_actionType {
  type: string;
  payload: i_homeStateData[];
}

export interface i_home_props {
  homeData: i_homeStateData[];
  getAllFoodRequest: () => void;
}
