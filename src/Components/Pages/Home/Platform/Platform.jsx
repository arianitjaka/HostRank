import React from 'react';
import './Platform.scss';
import { Link } from 'react-router-dom';

import Dot from '../../../../Assets/Home/Platform/dot.svg';
import FilledDot from '../../../../Assets/Home/Platform/filled-dot.svg';
import Pic from '../../../../Assets/Home/Platform/pic.png';


const Platform = () => {
    return (
        <div className="platform">

            <div className="info-content">
                <div className="info-header">
                    <h1>Meet the HostRank Platform</h1>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</p>
                </div>

                <div className="info-dots">
                    <div className="dots-content">
                        <img src={Dot} alt="" />
                        <h5>Benchmark against your competitors and industry</h5>
                    </div>

                    <div className="dots-content">
                        <img src={Dot} alt="" />
                        <h5 >Reveal your competition's analytics & online strategy</h5>
                    </div>

                    <div className="dots-content">
                        <img src={Dot} alt="" />
                        <h5>Discover new opportunities - partners, leads or affiliates</h5>
                    </div>

                    <div className="dots-content">
                        <img src={Dot} alt="" />
                        <h5>Identify emerging trends and new players</h5>
                    </div>

                    <div className="dots-content">
                        <img src={Dot} alt="" />
                        <h5>Understand consumer intent and journey</h5>
                    </div>
                </div>


                <div className="info-button">
                    <Link>
                        <h5>Get Started Now</h5>
                    </Link>
                </div>
            </div>


            <div className="info-image">
                <img src={Pic} alt="" />
            </div>

        </div>
    );
};

export default Platform;