import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

import ContentResearch from '../../../../Assets/Login/Signup/content-research.svg';
import CompetitiveWebsite from '../../../../Assets/Login/Signup/competitive-website.svg';
import Audience from '../../../../Assets/Login/Signup/audience.svg';

import RightArrow from '../../../../Assets/Login/arrow.svg';



const LeftHeader = () => {
    return (
        <div>
            <div className="signup-header-left">
                <div className="header-left-title">
                    <h1>Discover Your Website <br /> Audience Online For Free</h1>
                </div>

                <div data-aos="fade-right" data-aos-delay={300} className="header-left-content">
                    <div className="web-insights-content">
                        <div className="wi-left-image">
                            <img src={ContentResearch} alt="" />
                        </div>
                        <div className="wi-left-text">
                            <h1>Content Research</h1>
                            <p>Develop a more visible and authoritative brand by identifying topics and content your audience engages with</p>
                        </div>
                    </div>

                    <div className="competitors-content">
                        <div className="c-left-image">
                            <img src={CompetitiveWebsite} alt="" />
                        </div>
                        <div className="c-left-text">
                            <h1>Competitive Website Analysis</h1>
                            <p>Discover how you can outperform the competition in traffic, keywords, backlinks, and more with a competitive website analysis.</p>
                        </div>
                    </div>

                    <div className="competitors-content">
                        <div className="c-left-image">
                            <img src={Audience} alt="" />
                        </div>
                        <div className="c-left-text">
                            <h1>Target Audience Analysis</h1>
                            <p>Know what topics they care about, and the top keywords they use to search for information with a target audience analysis.</p>
                        </div>
                    </div>
                </div>

                <div className="header-left-buttons">
                    <button className="extension-left-button">
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
