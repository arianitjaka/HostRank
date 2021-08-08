import React from 'react';
import './Header.scss';
import Navbar from '../../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Header1 from '../../../Shared/Header/Header';

const Header = () => {
    return (
        <div className="header">
            <Header1 />
            <Banner />
        </div>
    );
};

export default Header;