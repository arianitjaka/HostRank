import React from 'react';
import './SecondPlatform.scss';

import Dot from '../../../../Assets/Home/Platform/dot.svg';
import FilledDot from '../../../../Assets/Home/Platform/filled-dot.svg';
import Pic2 from '../../../../Assets/Home/Platform/pic2.png';


const SecondPlatform = () => {
    return (
        <div className="second-platform">

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

            </div>


            <div className="info-image">
                <img src={Pic2} alt="" />
            </div>

        </div>
    );
};

export default SecondPlatform;