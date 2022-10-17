import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';



const Header = () => {
    const { user, logOut } = useContext(AuthContext)

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

                    {/* implement signOut button */}
                    {
                        user?.uid ?
                            <button onClick={logOut} className='btn btn-xs btn-primary'>Log Out</button>
                            :
                            <>
                                <NavLink to='/login'>Login</NavLink>
                                <NavLink to='/register'>Register</NavLink>
                            </>
                    }
                </div>

                {/* show current user */}
                <div className='text-white'>
                    {user?.email}
                </div>
            </nav>

        </div>
    );
};

export default Header;