import { i_accountStateData } from "../types/account";
// import { useHistory } from "react-router-dom";
const Dashboard = (props: { userInformation: i_accountStateData }) => {
  const { userID } = props.userInformation;
  // const history = useHistory();
  const logOut = () => {
    localStorage.removeItem("token");
    document.location.reload();
    // history.push("/account/signin");
  };

  return (
    <div>
      <h1>Dashboard Hello {userID}:</h1>
      <button onClick={logOut}>logout →</button>
    </div>
  );
};

export default Dashboard;
