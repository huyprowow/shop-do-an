import { connect } from "react-redux";
import { RootState } from "../types/store";

import Dashboard from "../components/Dashboard";
import GetStart from "../components/GetStart";
import { i_signIn_signOut_props } from "../types/signIn_signOut";

const Account = (props: i_signIn_signOut_props) => {
  const { signInStatus} = props.signInData;
  //<LoginForm />//chua lm signin
  //wellcome chua login, nhan j do de goi login form
  //<Dashboard /> //sau khi login show cai nay co thong tin user voi log out
  return (
    <div id="account">
      {signInStatus ? <Dashboard /> : <GetStart />}
    </div>
  );
};
const mapStateToProps = (state: RootState) => {
  return {
    signInData: state.signIn,
  };
};
export default connect(mapStateToProps, null)(Account);
