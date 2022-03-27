
const Dashboard = () => {
  const userID  = localStorage.getItem("userID");
  

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    document.location.reload();
  };

  return (
    <div id="dashboard-container">
      <h1>Hello &#x1F44B; {userID}:</h1>
      <i
        className="fa-solid fa-right-from-bracket btn-logout"
        onClick={logOut}
      ></i>
      <div className="dashboard">
        <img
          src="images/ht_z.jpg"
          alt="avatar"
          id="avatar"
          height="100"
          width="100"
        />
        <ul className="feature">
          <li>
            <i className="fa-solid fa-heart icon"></i>
            <span className="text">Sản Phẩm đã thích</span>
            <i className="fa-solid fa-greater-than icon-last"></i>
          </li>

          <li>
            <i className="fas fa-shopping-cart icon"></i>
            <span className="text">Giỏ hàng</span>
            <i className="fa-solid fa-greater-than icon-last"></i>
          </li>
          <li>
            <i className="fa-solid fa-message icon"></i>
            <span className="text">Nhắn tin</span>
            <i className="fa-solid fa-greater-than icon-last"></i>
          </li>
        </ul>
        <div id="suggest-product">
          <h3>gợi ý</h3>
          ...
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
