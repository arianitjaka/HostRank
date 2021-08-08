import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

import GoogleIcon from '../../../../Assets/Login/login-google.svg';
import TwitterIcon from '../../../../Assets/Login/login-twitter.svg';
import UsernameIcon from '../../../../Assets/Login/username-input.svg';
import EmailIcon from '../../../../Assets/Login/email-input.svg';
import PasswordIcon from '../../../../Assets/Login/password-input.svg';

import InstagramIcon from '../../../../Assets/Login/instagram.svg';
import TwitterSIcon from '../../../../Assets/Login/twitter.svg';
import FacebookIcon from '../../../../Assets/Login/facebook.svg';
import LinkedInIcon from '../../../../Assets/Login/linkedin.svg';
import YoutubeIcon from '../../../../Assets/Login/youtube.svg';


const RightHeader = () => {
    return (
        <div>
            <div className="signup-header-right">
                <div data-aos="fade-left" data-aos-delay={300} className="header-right-form">
                    <div className="header-form-title">
                        <h1>Welcome Back!</h1>
                    </div>

                    <div className="header-form-buttons">
                        <button className="signup-google-button">
                            <img src={GoogleIcon} alt="" />
                            <Link><h1>Continue with Google</h1></Link>
                        </button>
                        <button className="signup-twitter-button">
                            <img src={TwitterIcon} alt="" />
                            <Link><h1>Continue with Twitter</h1></Link>
                        </button>
                    </div>

                    <hr className="header-signup-form-hr" />

                    <div className="header-or-text">or</div>


                    <div className="signup-input-fields">
                        <h6>Username</h6>
                        <div className="signup-username-input">
                            <img src={UsernameIcon} alt="" />
                            <input type="text" />
                        </div>
                    </div>

                    <div className="signup-input-fields">
                        <h6>Email address</h6>
                        <div className="signup-username-input">
                            <img src={EmailIcon} alt="" />
                            <input type="email" />
                        </div>
                    </div>

                    <div className="signup-input-fields">
                        <h6>Your password</h6>
                        <div className="signup-password-input">
                            <img src={PasswordIcon} alt="" />
                            <input type="password" className="header-signup-password-input" />
                            <button className="signup-show-password">
                                <h1>Show</h1>
                            </button>
                        </div>

                        <h6 style={{marginTop: "10px"}}>Confirm password</h6>
                        <div className="signup-password-input">
                            <img src={PasswordIcon} alt="" />
                            <input type="password" className="header-signup-password-input" />
                            <button className="signup-show-password">
                                <h1>Show</h1>
                            </button>
                        </div>

                        <div className="signup-remember-password">
                            <input type="checkbox" />
                            <h6>Remember password</h6>
                        </div>
                    </div>

                    <button className="header-signup-button">
                        <Link><h1>Signup</h1></Link>
                    </button>

                    <div className="header-signup-no-acc">
                        <h1>I accept the <Link>Terms of Services</Link>.</h1>
                    </div>

                </div>

                <div className="header-right-signup-social-apps-text">
                    <div className="signup-social-apps">
                        <img src={InstagramIcon} alt="" />
                        <img src={TwitterSIcon} alt="" />
                        <img src={FacebookIcon} alt="" />
                        <img src={LinkedInIcon} alt="" />
                        <img src={YoutubeIcon} alt="" />
                    </div>
                    
                    <div className="signup-copyright-text">
                        <h1>&copy; 2021 All Rights Reserved. HostRank Inc</h1>
                    </div>
                </div>


            </div>

        </div>



    );
};

export default RightHeader;