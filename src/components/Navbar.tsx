import React from 'react'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <ul>
            <li >
            <Link to='/'>
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
            </Link>
            </li>
            <li>
            <Link to='/addproduct'>
                <span>Thêm sản phẩm</span>
                </Link>
            </li>
            <li>
            <Link to='/payment'>
                <span>Thanh toán</span>
            </Link>
            </li>
            <li>
            <Link to='/account'>
                <span>Tài Khoản</span>
            </Link>
            </li>
        </ul>
    )
}

export default Navbar
