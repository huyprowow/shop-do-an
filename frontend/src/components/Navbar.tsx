import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul id="nav-bar">
      <li>
        <Link to="/">
          <i className="fas fa-home large-icon"></i>
          <span className="label">Home</span>
        </Link>
      </li>
      <li>
        <Link to="/payment">
          <i className="fas fa-wallet large-icon"></i>
          <span className="label">Thanh toán</span>
        </Link>
      </li>
      <li>
        <Link to="/addproduct">
          <i className="fas fa-plus-circle large-icon"></i>
          <span className="label">Thêm</span>
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <i className="fas fa-shopping-cart large-icon"></i>
          <span className="label">Giỏ hàng</span>
        </Link>
      </li>

      <li>
        <Link to="/account">
          <i className="fas fa-user large-icon"></i>
          <span className="label">Tài Khoản</span>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
