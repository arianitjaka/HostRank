import React, { useState } from 'react';
import './Navbar.scss';
import { MenuItems } from './MenuItems';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';
import Logo from './Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
// import { Link } from "react-router-dom";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';


function Navbar() {
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

    const [state,setState] = useState(false); 
    function showBar() {
        setState(!state);
    }

    return (
        <div>
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
                                    <button className="nav-searchbar-button" onClick={showBar}>
                                        <SearchIcon className="explore-search-icon" />
                                    </button>
                                    {item.title}
                                    <ArrowDropDownIcon className="li-arrow-down-icon" />
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

            {state === true  && <SearchBar />}

        </div>
    )
};

export default Navbar;