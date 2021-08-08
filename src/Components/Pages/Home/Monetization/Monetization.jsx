import React from 'react';
import './Monetization.scss';
import { Link } from 'react-router-dom';

import Arrow from '../../../../Assets/Home/Monetization/arrow.svg';

import GoogleLogo from '../../../../Assets/Home/Monetization/google.svg';
import YoutubeLogo from '../../../../Assets/Home/Monetization/youtube.svg';
import FacebookLogo from '../../../../Assets/Home/Monetization/facebook.svg';
import TwitterLogo from '../../../../Assets/Home/Monetization/twitter.svg';
import InstagramLogo from '../../../../Assets/Home/Monetization/instagram.svg';

import CheckIcon from '../../../../Assets/Home/Monetization/check.svg';



const Monetization = () => {
    return (
        <div className="monetization">

            <div className="left-content">
                <div className="left-info">
                    <h1>Improve Website Monetization</h1>
                    <p>Looking to improve website monetization? Attract more investors? Discover new partners and channels?
                    Partner with HostRank, so your public traffic ranking reflects your real-world success.
                        Get your site accredited and give your online reputation a huge boost.</p>
                </div>

                <div className="left-buttons">
                    <button className="get-started-button">
                        <Link>
                            <h1>Get Started Now</h1>
                        </Link>
                    </button>

                    <button className="learn-more">
                        <Link>
                            <h1>Learn More</h1>
                        </Link>
                        <img src={Arrow} alt="" />
                    </button>
                </div>
            </div>

            <div className="right-content">
                <div data-aos="fade-left" data-aos-delay={200} className="stack-content" id="google">
                    <div className="stack-number">
                        <h1>#1</h1>
                    </div>
                    <div className="stack-logo-name">
                        <img src={GoogleLogo} alt="" />
                        <h1>google.com</h1>
                    </div>
                    <div className="stack-visits">
                        <h1>1B visits</h1>
                    </div>
                    <div className="stack-check">
                        <img src={CheckIcon} alt="" />
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-delay={300} className="stack-content" id="youtube">
                    <div className="stack-number">
                        <h1>#2</h1>
                    </div>
                    <div className="stack-logo-name">
                        <img src={YoutubeLogo} alt="" />
                        <h1>youtube.com</h1>
                    </div>
                    <div className="stack-visits">
                        <h1>500M visits</h1>
                    </div>
                    <div className="stack-check">
                        <img src={CheckIcon} alt="" />
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-delay={400} className="stack-content" id="facebook">
                    <div className="stack-number">
                        <h1>#3</h1>
                    </div>
                    <div className="stack-logo-name">
                        <img src={FacebookLogo} alt="" />
                        <h1>facebook.com</h1>
                    </div>
                    <div className="stack-visits">
                        <h1>37M visits</h1>
                    </div>
                    <div className="stack-check">
                        <img src={CheckIcon} alt="" />
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-delay={500} className="stack-content" id="twitter">
                    <div className="stack-number">
                        <h1>#4</h1>
                    </div>
                    <div className="stack-logo-name">
                        <img src={TwitterLogo} alt="" />
                        <h1>twitter.com</h1>
                    </div>
                    <div className="stack-visits">
                        <h1>35M visits</h1>
                    </div>
                    <div className="stack-check">
                        <img src={CheckIcon} alt="" />
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-delay={600} className="stack-content" id="instagram">
                    <div className="stack-number">
                        <h1>#5</h1>
                    </div>
                    <div className="stack-logo-name">
                        <img src={InstagramLogo} alt="" />
                        <h1>instagram.com</h1>
                    </div>
                    <div className="stack-visits">
                        <h1>20M visits</h1>
                    </div>
                    <div className="stack-check">
                        <img src={CheckIcon} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Monetization;