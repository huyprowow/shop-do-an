import { i_accountStateData } from "../types/account";
const Dashboard = (props: { userInformation: i_accountStateData }) => {
  const { _id, userID, password } = props.userInformation;
  return (
    <div>
      <h1>Dashboard hello user:</h1>
      <p>Id:{_id}</p>
      <p>Username:{userID}</p>
      <p>Password:{password}</p>
    </div>
  );
};

export default Dashboard;
