import React from 'react';
import './DropdownLogin.scss';
import { Link } from 'react-router-dom';

import LoginUsernameIcon from '../../../../../../../Assets/Home/LoginHover/username.svg';
import LoginPasswordIcon from '../../../../../../../Assets/Home/LoginHover/password.svg';


const DropdownLogin = () => {
    return (
        <div className="dropdown-login">
            <div className="login-dropdown-header">
                <h1>Welcome Back</h1>
            </div>

            <div className="login-input-fields">
                <h6>Username or email</h6>
                <div className="login-username-input">
                    <img src={LoginUsernameIcon} alt="" />
                    <input type="text" />
                </div>
            </div>

            <div className="login-input-fields">
                <h6>Your password</h6>
                <div className="login-password-input">
                    <img src={LoginPasswordIcon} alt="" />
                    <input type="password" />
                    <button className="login-show-password">
                        <h1>Show</h1>
                    </button>
                </div>

                <div className="login-remember-password">
                    <input type="checkbox" />
                    <h6>Remember password</h6>
                </div>
            </div>

            <button className="login-button">
                <Link>
                    <h5>Login</h5>
                </Link>
            </button>

            <div className="login-no-account">
                <h6>Don`t have an account?</h6>
                <Link>
                    <h6>Signup</h6>
                </Link>
            </div>

        </div>
    );
};

export default DropdownLogin;
