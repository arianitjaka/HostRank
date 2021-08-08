import React from 'react';
import './Login.scss';
import LoginDropdown from './Dropdown/DropdownLogin';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="login">
            <Link to="/login">
                <h1>Login</h1>
            </Link>

            <div className="dropdown">
                <LoginDropdown/>
            </div>
        </div>
        
    );
};

export default Login;