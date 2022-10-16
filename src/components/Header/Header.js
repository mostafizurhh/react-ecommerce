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
                    <NavLink to='/home' className={({ isActive }) =>
                        isActive ? 'active' : undefined
                    }>Home</NavLink>
                    <NavLink to='/orders'>Orders</NavLink>
                    <NavLink to='/inventory'>Inventory</NavLink>
                    <NavLink to='/shop'>Shop</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                </div>
            </nav>

        </div>
    );
};

export default Header;