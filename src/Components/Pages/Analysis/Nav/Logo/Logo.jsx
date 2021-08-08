import React from 'react';
import { Link } from "react-router-dom";
import './Logo.scss';

import LogoIcon from './logo.svg';


const Logo = () => {
    return (
        <div>
            <Link to="/" className="logo">
                <img src={LogoIcon} alt="" />
                <h1>HostRank</h1>
            </Link>
        </div>
    );
};

export default Logo;