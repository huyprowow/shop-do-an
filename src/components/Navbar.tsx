import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
            <li >
            <Link to='/'>
                <i className="fas fa-home"></i>
                <span className="hide label">Home</span>
            </Link>
            </li>
            <li>
            <Link to='/payment'>
                <i className="fas fa-wallet"></i>
                <span  className="hide label">Thanh toán</span>
            </Link>
            </li>
            <li>
            <Link to='/addproduct' >
                <i className="fas fa-plus-circle"></i>
                <span  className="hide label">Thêm</span>
                </Link>
            </li>
            <li>
            <Link to='/cart'>
                <i className="fas fa-shopping-cart"></i>
                <span  className="hide label">Giỏ hàng</span>
            </Link>
            </li>

            <li>
            <Link to='/account'>
                <i className="fas fa-user"></i>
                <span  className="hide label">Tài Khoản</span>
            </Link>
            </li>
        </ul>
    )
}

export default Navbar
