import React from 'react';
import './Signup.scss';
import SignupDropdown from './Dropdown/DropdownSignup';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="signup">
            <Link to="/signup">
                <h1 className="signup-button-text">Signup</h1>
            </Link>

            <div className="signup-dropdown">
                <SignupDropdown />
            </div>
        </div>
    );
};

export default Login;