// import { createStore,compose } from "redux";
import { rootReducer } from "./reducers/index";
import { configureStore } from '@reduxjs/toolkit'

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// export const configureStore = () => {
//   const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//   const store = createStore(rootReducer, composeEnhancers());
//   return store;
// };

const store = configureStore({ reducer: rootReducer })

export default store;
