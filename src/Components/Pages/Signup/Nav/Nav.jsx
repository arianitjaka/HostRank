import React, { useState } from 'react';
import './Nav.scss';
import { MenuItems } from './MenuItems';
import Login from '../Nav/Auth/Login/Login';
import Signup from './Auth/Signup/Signup';
import Logo from './Logo/Logo';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';


function Nav() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={navbar ? 'navbar-items active' : 'navbar-items'}>
            <h1 className="navbar-logo">
                <Logo />
            </h1>
            <div className="menu-icon">
                <MenuIcon />
            </div>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={MenuItems.cName} href={item.link}>
                                <SearchIcon className="explore-search-icon"/>
                                {item.title}
                                <ArrowDropDownIcon className="li-arrow-down-icon"/>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className="nav-buttons active">
                <Login className="nav-login-button" />
                <Signup className="nav-signup-button" />
            </div>
        </nav>
    )
};

export default Nav;