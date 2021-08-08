import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

import WebInsights from '../../../../Assets/Login/web-insights.svg';
import Competitors from '../../../../Assets/Login/competitors.svg';
import Advertising from '../../../../Assets/Login/advertising.png';

import GoogleExtension from '../../../../Assets/Login/chrome.svg';
import RightArrow from '../../../../Assets/Login/arrow.svg';



const LeftHeader = () => {
    return (
        <div>
            <div className="login-header-left">
                <div  className="header-left-title">
                    <h1>Discover Your Website <br /> Audience Online For Free</h1>
                </div>

                <div  data-aos="fade-right" data-aos-delay={100}className="header-left-content">
                    <div className="web-insights-content">
                        <div className="wi-left-image">
                            <img src={WebInsights} alt="" />
                        </div>
                        <div className="wi-left-text">
                            <h1>Get unlimited web insights</h1>
                            <p>Access unlimited insights for your website to succeed in world's modern markets online.</p>
                        </div>
                    </div>

                    <div className="competitors-content">
                        <div className="c-left-image">
                            <img src={Competitors} alt="" />
                        </div>
                        <div className="c-left-text">
                            <h1>Learn from potential competitors</h1>
                            <p>Get a 360-degree view into every company you want and take advantage by studying their strategies.</p>
                        </div>
                    </div>

                    <div className="competitors-content">
                        <div className="c-left-image">
                            <img src={Advertising} alt="" />
                        </div>
                        <div className="c-left-text">
                            <h1>Maximize your advertising</h1>
                            <p>Learn where additional consumers spend most of the time and the money online.</p>
                        </div>
                    </div>
                </div>

                <div className="header-left-buttons">
                    <button className="extension-left-button">
                        <img src={GoogleExtension} alt="" />
                        <Link><h1>Get google chrome extension</h1></Link>
                    </button>

                    <button className="learn-more-right-button">
                        <Link><h1>Learn More</h1></Link>
                        <img src={RightArrow} alt="" />
                    </button>
                </div>

            </div>
            
        </div>



    );
};

export default LeftHeader;
