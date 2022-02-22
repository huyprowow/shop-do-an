import { combineReducers } from "redux";
import { homeReducer } from "./home";
import { accountReducer } from "./account";
import { signInReducer } from "./signIn_signOut";
export const rootReducer = combineReducers({
  home: homeReducer,
  account: accountReducer,
  signIn: signInReducer,
});
