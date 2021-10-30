// import { lazy } from "react";
// const HomePage = lazy(() => import("../pages/HomePage"));
// const AddProduct = lazy(() => import("../pages/AddProduct"));
// const Account = lazy(() => import("../pages/Account"));
// const Payment = lazy(() => import("../pages/Payment"));
// const NotFound = lazy(() => import("../pages/NotFound"));
import Account from '../pages/Account';
import HomePage from '../pages/HomePage'
import AddProduct from '../pages/AddProduct'
import Payment from '../pages/Payment';
import NotFound from '../pages/NotFound';

const routers=[
  { path: "/", exact: true, component: HomePage  },
  { path: "/addproduct", exact: true, component: AddProduct  },
  { path: "/account", exact: true, component: Account },
  { path: "/payment", exact: true, component: Payment },
  { component:  NotFound },
];


export default routers;