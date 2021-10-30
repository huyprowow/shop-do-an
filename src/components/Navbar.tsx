import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/addproduct'>Thêm sản phẩm</Link>
            <Link to='/payment'>Thanh toán</Link>
            <Link to='/account'>Tài Khoản</Link>
        </ul>
    )
}

export default Navbar
