import React from 'react';
import './Header.scss';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';



const Header = () => {
    return (
        <div className="login-header">
            <LeftHeader />
            <RightHeader />

        </div>



    );
};

export default Header;
