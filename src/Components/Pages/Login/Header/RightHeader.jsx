import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

import GoogleIcon from '../../../../Assets/Login/login-google.svg';
import TwitterIcon from '../../../../Assets/Login/login-twitter.svg';
import UsernameIcon from '../../../../Assets/Login/username-input.svg';
import PasswordIcon from '../../../../Assets/Login/password-input.svg';

import InstagramIcon from '../../../../Assets/Login/instagram.svg';
import TwitterSIcon from '../../../../Assets/Login/twitter.svg';
import FacebookIcon from '../../../../Assets/Login/facebook.svg';
import LinkedInIcon from '../../../../Assets/Login/linkedin.svg';
import YoutubeIcon from '../../../../Assets/Login/youtube.svg';


const RightHeader = () => {
    return (
        <div>
            <div className="login-header-right">
                <div data-aos="fade-left" data-aos-delay={300} className="header-right-form">
                    <div className="header-form-title">
                        <h1>Welcome Back!</h1>
                    </div>

                    <div className="header-form-buttons">
                        <button className="login-google-button">
                            <img src={GoogleIcon} alt="" />
                            <Link><h1>Continue with Google</h1></Link>
                        </button>
                        <button className="login-twitter-button">
                            <img src={TwitterIcon} alt="" />
                            <Link><h1>Continue with Twitter</h1></Link>
                        </button>
                    </div>

                    <hr className="header-login-form-hr" />

                    <div className="header-or-text">or</div>


                    <div className="login-input-fields">
                        <h6>Username or email</h6>
                        <div className="login-username-input">
                            <img src={UsernameIcon} alt="" />
                            <input type="text" />
                        </div>
                    </div>


                    <div className="login-input-fields">
                        <h6>Your password</h6>
                        <div className="login-password-input">
                            <img src={PasswordIcon} alt="" />
                            <input type="password" className="header-login-password-input" />
                            <button className="login-show-password">
                                <h1>Show</h1>
                            </button>
                        </div>

                        <div className="login-remember-password">
                            <input type="checkbox" />
                            <h6>Remember password</h6>
                        </div>
                    </div>

                    <button className="header-login-button">
                        <Link><h1>Login</h1></Link>
                    </button>

                    <div className="header-login-no-acc">
                        <h1>Don`t have account? <Link>Signup</Link></h1>
                    </div>

                </div>

                <div className="header-right-login-social-apps-text">
                    <div className="login-social-apps">
                        <img src={InstagramIcon} alt="" />
                        <img src={TwitterSIcon} alt="" />
                        <img src={FacebookIcon} alt="" />
                        <img src={LinkedInIcon} alt="" />
                        <img src={YoutubeIcon} alt="" />
                    </div>
                    
                    <div className="login-copyright-text">
                        <h1>&copy; 2021 All Rights Reserved. HostRank Inc</h1>
                    </div>
                </div>


            </div>

        </div>



    );
};

export default RightHeader;