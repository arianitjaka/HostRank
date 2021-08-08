import React from 'react';
import './Seo.scss';

import SeoPic from '../../../../Assets/Home/Seo/seo.png';

const Seo = () => {
    return (
        <div className="seo">

            <div className="seo-title">
                <h1>The Safest Digital Measure Online</h1>
                <p>Get started now. Hostrank is the safest SEO and user-friendly competitive analysis software</p>
            </div>

            <div className="seo-content">
                <div className="seo-image">
                    <img src={SeoPic} alt="" />
                </div>

                <div className="seo-info">
                    <div className="info-title">
                        <h1>Who benefits from HostRank?</h1>
                    </div>
                    <div className="info-paragraphs">
                        <h1>Marketing Strategy</h1>
                        <p>Marketing Directors find opportunities to drive traffic, improve their SEO and PPC, and uncover the best marketing strategy.</p>
                    </div>
                    <div className="info-paragraphs">
                        <h1>Leadership Teams</h1>
                        <p>Leadership teams create board-friendly presentations benchmarking against the competition, demonstrating strengths and weaknesses, identifying new opportunities, and surfacing competitive threats.</p>
                    </div>
                    <div className="info-paragraphs">
                        <h1>Evaluate Partnerships</h1>
                        <p>Analysts, Investors, and Business Development Professionals research the strength, popularity, and influence of potential partnerships, investment opportunities, and industry trends.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Seo;