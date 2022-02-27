import { useState } from "react";
import http from "../apis/http-common";
import { connect } from "react-redux";
import { AppDispatch } from "../types/store";
import { useHistory } from "react-router-dom";
import { actionAddAcc } from "../actions/account";
import { actionSignIn } from "../actions/signIn_signOut";
import { AxiosError } from "../types/axios";
import { i_signin_success_res } from "../types/signIn_signOut";
import {
  i_accountStateData,
  i_account_error_res,
  i_account_success_res,
} from "../types/account";

const LoginForm = (props: { addAcc: Function; signIn: Function }) => {
  const [password, setPassword] = useState<string>("");
  const [userID, setUserID] = useState<string>("");
  const [error, setError] = useState<string[]>([]);
  const [successMsg, setSuccessMsg] = useState<string>("");
  let history = useHistory();
  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault();
    setError([]);
    const { name, value } = e.target as HTMLInputElement;
    if (name === "userID") {
      setUserID(value);
    } else {
      setPassword(value);
    }
  };
  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    http
      .post<i_signin_success_res>("/accounts/signin", {
        userID: userID,
        password: password,
      })
      .then((res) => {
        props.signIn(true, res.data.account);

        setSuccessMsg(res.data.message);
        history.push("/account");
      })
      .catch((err: AxiosError) => {
        if (err.response?.data) {
          let errList: i_account_error_res = err.response?.data;
          let errMsgList: string[] = errList.errors.map((err) => err.msg);
          setError(errMsgList);
        }
      });
  };
  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newAcc = { userID, password };
    console.log(newAcc);
    http
      .post<i_account_success_res>("/accounts/signup", newAcc)
      .then((res) => {
        // console.log(res.data);
        if (res.status === 201) {
          console.log(res.data);
          props.addAcc(newAcc);
          setSuccessMsg(res.data.message);
        }
      })
      .catch((err: AxiosError) => {
        console.log(err.response?.data);
        if (err.response?.data) {
          let errList: i_account_error_res = err.response?.data;
          let errMsgList: string[] = errList.errors.map((err) => err.msg);

          setError(errMsgList);
        }
      });
  };

  return (
    <form id="form-group">
      <h3 id="form-title">SignIn/SignUp</h3>
      <p>
        <label htmlFor="username" className="form-label">
          UserName
        </label>
        <input
          type="text"
          id="username"
          className="inp-form"
          placeholder="Username"
          onChange={handleChange}
          name="userID"
          value={userID}
        />
      </p>
      <p>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="inp-form"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </p>
      {error && error.map((err) => <p className="error">{err}</p>)}
      {successMsg && <p className="success">{successMsg}</p>}
      <button className="btn-sign-in" onClick={handleSignIn}>
        SignIn
      </button>
      <button className="btn-sign-up" onClick={handleSignUp}>
        SignUp
      </button>
    </form>
  );
};
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    addAcc: (newAcc: i_accountStateData) => {
      dispatch(actionAddAcc(newAcc));
    },
    signIn: (signInStatus: boolean, account: i_accountStateData) => {
      dispatch(actionSignIn(signInStatus, account));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
