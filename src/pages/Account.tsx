import { connect } from "react-redux";
import { RootState } from "../types/store";
import { actionGetAccRequest } from "../actions/account";

import Dashboard from "../components/Dashboard";
import GetStart from "../components/GetStart";
import { i_signIn_signOut_props } from "../types/signIn_signOut";

const Account = (props: i_signIn_signOut_props) => {
  const { signInStatus, account } = props.signInData;
  //<LoginForm />//chua lm signin
  //wellcome chua login, nhan j do de goi login form
  //<Dashboard /> //sau khi login show cai nay co thong tin use password voi log out
  return signInStatus ? <Dashboard userInformation={account} /> : <GetStart />;
};
const mapStateToProps = (state: RootState) => {
  return {
    signInData: state.signIn,
  };
};
// const mapDispatchToProps = (dispatch: AppDispatch) => {
//   return {
//     getAllAccRequest: () => {
//       dispatch(actionGetAccRequest());
//     },
//   };
// };

export default connect(mapStateToProps, null)(Account);
