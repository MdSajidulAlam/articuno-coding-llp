import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart3, BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

const Header = () => {


    const manuItems = <>
        <li><Link to='/'>Men</Link></li>
        <li><Link to='/tools'>Woman</Link></li>
        <li><Link to='/portfolio'>Kids</Link></li>

        {/* {
        user && <li><Link to='/dashboard'>Dashboard</Link></li>
    }
    <li>{user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <Link to='/login'>Login</Link>}</li> */}
    </>
    const userItems = <>
        <li><Link to='/portfolio'><BsSearch></BsSearch></Link></li>
        <li><Link to='/portfolio'><BsCart3 /></Link></li>
        <li><Link to='/portfolio'><BiUser /></Link></li>
    </>

    return (
        <div className="navbar bg-base-100 lg:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItems}
                        <div className='flex'>{userItems}</div>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><span className=''>E</span>-Shop</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 w-full">
                    {manuItems}
                    <div className='flex justify-end'>{userItems}</div>
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Header;