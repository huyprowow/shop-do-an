import { i_homeState, i_actionType } from "../types/home";

const initialState = [
  {
    id: "6187d0b0e7fcadc617209300",
    name: "hamburger",
    price: 1.22,
    image: "/images/hamburger.jpg",
    type: "fast food",
  },
];

export const homeReducer = (
  state: i_homeState[] = initialState,
  action: i_actionType
) => {
  switch (action.type) {
    // case :

    // break;

    default:
      return [...state];
  }
};
