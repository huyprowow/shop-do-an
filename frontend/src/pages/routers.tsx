// import { lazy } from "react";
// const HomePage = lazy(() => import("../pages/HomePage"));
// const AddProduct = lazy(() => import("../pages/AddProduct"));
// const Account = lazy(() => import("../pages/Account"));
// const Payment = lazy(() => import("../pages/Payment"));
// const NotFound = lazy(() => import("../pages/NotFound"));
import Account from './Account';
import HomePage from './HomePage'
import AddProduct from './AddProduct'
import Payment from './Payment';
import NotFound from './NotFound';
import Cart from './Cart';
import LoginForm from '../components/LoginForm';
import Chat from './Chat';

const routers=[
  { path: "/", exact: true, component: HomePage  },
  { path: "/addproduct", exact: true, component: AddProduct  },
  { path: "/account", exact: true, component: Account },
  { path: "/payment", exact: true, component: Payment },
  { path: "/cart", exact: true, component: Cart },
  { path: "/account/signin", exact: true, component: LoginForm },
  {path:"/chat",exact:true,component:Chat},
  { component:  NotFound },
];


export default routers;