import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import SelectLanguage from '../../Shared/SelectLanguage/SelectLanguage';

import Extension from '../../../Assets/Footer/extension.svg';

import Logo from '../../../Assets/Footer/logo.svg';
import Email from '../../../Assets/Footer/email.svg';
import Phone from '../../../Assets/Footer/phone.svg';
import Location from '../../../Assets/Footer/location.svg';

import Instagram from '../../../Assets/Footer/instagram.svg';
import Twitter from '../../../Assets/Footer/twitter.svg';
import Facebook from '../../../Assets/Footer/facebook.svg';
import LinkedIn from '../../../Assets/Footer/linkedin.svg';
import Youtube from '../../../Assets/Footer/youtube.svg';



const Footer = (props) => {
    return (
        <div className="footer">

            <div className="discover-audience">
                <h1>Discover Your Audience Free For 30 Days</h1>
                <p>From executing day-to-day tactics, to building long-term digital strategies, all your decisions can now be driven by the most important data there is - reality.</p>
                <button className="audience-button">
                    <Link>
                        <img src={Extension} alt="" />
                        <h3>Get Hostrank Free Extension</h3>
                    </Link>
                </button>
            </div>

            <div className="footer-columns">
                <div className="info-col">
                    <img src={Logo} alt="" />
                    <p>Get better marketing results by finding better opportunities to grow your business online</p>
                    <hr />
                    <div className="contact-col">
                        <img src={Email} alt="" />
                        <h6>example@hostrank.com</h6>
                    </div>
                    <div className="contact-col">
                        <img src={Phone} alt="" />
                        <h6>+1 -800-540-1086</h6>
                    </div>
                    <div className="contact-col">
                        <img src={Location} alt="" />
                        <h6>35 East 21St Street, 9Th Floor, <br /> New York, NY 10010</h6>
                    </div>
                </div>

                <div className="col-content">
                    <h5>Browse</h5>
                   <p> <Link to="/">Top Wbsites</Link></p> 
                   <p>  <Link to="/">Top Android Apps</Link></p> 
                   <p> <Link to="/">Top Ios Apps</Link></p> 
                   <p> <Link to="/">Digital 100</Link></p> 
                   <p> <Link to="/">Our Data</Link></p> 
                   <p> <Link to="/">Verify Your Websit</Link></p> 
                   <p>  <Link to="/">Browser Extension</Link></p> 
                </div>
                <div className="col-content">
                    <h5>Solutions</h5>
                    <p> <Link to="/">Digital Research Intelligence</Link></p> 
                    <p>  <Link to="/">Digital Marketing Intelligence</Link></p> 
                    <p> <Link to="/">Shopper Intelligence</Link></p> 
                    <p> <Link to="/">Lead Enrichment API</Link></p> 
                    <p> <Link to="/">Stock Intelligence</Link></p> 
                    <p> <Link to="/">Alternative Data</Link></p> 
                    <p> <Link to="/">Investor API</Link></p> 
                </div>
                <div className="col-content">
                    <h5>Resources</h5>
                    <p>  <Link to="/">Insights Blog</Link></p> 
                    <p> <Link to="/">Market Research Blog</Link></p> 
                    <p> <Link to="/">Digital Marketing Blog</Link></p> 
                    <p> <Link to="/">Shopper Blog</Link></p> 
                    <p> <Link to="/">Investors Blog</Link></p> 
                    <p> <Link to="/">Sales Blog</Link></p> 
                    <p> <Link to="/">Become A Contributor</Link></p> 
                </div>
                <div className="col-content">
                    <h5>About us</h5>
                    <p><Link to="/">Company</Link></p>
                    <p> <Link to="/">Partners</Link></p> 
                    <p> <Link to="/">Costumers</Link></p> 
                    <p> <Link to="/">Management</Link></p> 
                    <p> <Link to="/">Careers</Link></p> 
                    <p> <Link to="/">Press</Link></p> 
                    <p> <Link to="/">Engineering</Link></p> 
                </div>
            </div>


            <div className="footer-subscribe">
                <button className="extension-button">
                    <Link>
                        <img src={Extension} alt="" />
                        <h4>Get Hostrank Free Extension</h4>
                    </Link>
                </button>

                <div className="follow-us">
                    <h4>Follow us:</h4>
                    <img src={Instagram} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Youtube} alt="" />
                </div>

                <div className="try-hostrank">
                    <h4>Try HostRank For Free </h4>
                    <div className="input-field">
                        <img src={Email} alt="" />
                        <input type="text" placeholder="example@gmail.com" />
                        <button className="input-button">
                            <Link>
                                <h4>Get Started</h4>
                            </Link>
                        </button>
                    </div>
                </div>

            </div>

            <hr className="h-line" />

            <div className="footer-bottom">
                <div className="bottom-left">
                    <h4>©All Rights Reserved 2021. Hostrank Inc.</h4>
                </div>

                <div className="bottom-center">
                    <div className="bc-cols">
                        <h4>Categories</h4>
                    </div>
                    <div className="bc-cols">
                        <h4>Countries</h4>
                    </div>
                    <div className="bc-cols">
                        <h4>Privacy </h4>
                    </div>
                    <div className="bc-cols">
                        <h4>Cookie Policy</h4>
                    </div>
                    <div className="bc-cols">
                        <h4>Terms of Use</h4>
                    </div>
                </div>

                <div className="bottom-right">
                    <SelectLanguage
                        setLanguage={props.setLanguage}
                        language={props.language}
                    />
                </div>

                {/* <div className="bottom-right">
                    <div className="language-switch">
                        <h4>Soon</h4>
                    </div>
                </div> */}
            </div>

        </div>
    );
}

export default Footer;