import React from 'react';
import './DropdownSignup.scss';
import { Link } from 'react-router-dom';

import SignupUsernameIcon from '../../../../../../../Assets/Home/SignupHover/username.svg';
import SignupnEmailIcon from '../../../../../../../Assets/Home/SignupHover/email.svg';
import SignupPasswordIcon from '../../../../../../../Assets/Home/SignupHover/password.svg';


const DropdownSignup = () => {
    return (
        <div className="dropdown-signup">
            <div className="signup-dropdown-header">
                <h1>Signup</h1>
            </div>

            <div className="signup-input-fields">
                <h6>Username</h6>
                <div className="signup-username-input">
                    <img src={SignupUsernameIcon} alt="" />
                    <input type="text" />
                </div>
            </div>

            <div className="signup-input-fields">
                <h6>Email</h6>
                <div className="signup-username-input">
                    <img src={SignupnEmailIcon} alt="" />
                    <input type="text" />
                </div>
            </div>

            <div className="signup-input-fields">
                <h6>Your password</h6>
                <div className="signup-password-input">
                    <img src={SignupPasswordIcon} alt="" />
                    <input type="password" />
                    <button className="signup-show-password">
                        <h1>Show</h1>
                    </button>
                </div>

                <h6 id="signup-confirm-password">Confirm password</h6>
                <div className="signup-password-input">
                    <img src={SignupPasswordIcon} alt="" />
                    <input type="password" />
                    <button className="signup-show-password">
                        <h1>Show</h1>
                    </button>
                </div>

                <div className="signup-remember-password">
                    <input type="checkbox" />
                    <h6>I Accept the <span>Terms of Services</span> </h6>
                </div>
            </div>

            <button className="signup-button">
                <Link>
                    <h5>Signup</h5>
                </Link>
            </button>

            <div className="signup-no-account">
                <h6>Don`t have an account?</h6>
                <Link>
                    <h6>Signup</h6>
                </Link>
            </div>

        </div>
    );
};

export default DropdownSignup;
