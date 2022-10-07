import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <nav className='header'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div >
                    <a href="/home">Home</a>
                    <a href="/orders">Orders</a>
                    <a href="/products">Products</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About Us</a>
                    <a href="/shop">Shop</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;