import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <ul>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/addproduct'>Thêm sản phẩm</Link>
            </li>
            <li>
            <Link to='/payment'>Thanh toán</Link>
            </li>
            <li>
            <Link to='/account'>Tài Khoản</Link>
            </li>
        </ul>
    )
}

export default Navbar
