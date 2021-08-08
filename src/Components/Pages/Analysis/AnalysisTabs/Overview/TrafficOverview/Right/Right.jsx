import React from 'react';
import './Right.scss';

import Settings from '../../../../../../../Assets/Analysis/tab1/TrafficOverview/settings.svg';
import Clock from '../../../../../../../Assets/Analysis/tab1/TrafficOverview/clock.svg';
import Eye from '../../../../../../../Assets/Analysis/tab1/TrafficOverview/eye.svg';
import Stats from '../../../../../../../Assets/Analysis/tab1/TrafficOverview/stats.svg';


const Right = () => {
    return (
        <div>

            <div className="tsc-right">
                <div className="traffic-insights-content">
                    <div className="ti-title">
                        <h1>Traffic Insights</h1>
                        <p>Measure how users interact with your site</p>
                    </div>

                    <div className="ti-total-visits">
                        <div className="total-visits-content">
                            <div className="tv-left">
                                <img src={Settings} alt="" />
                                <h1>Optimization Opportunities</h1>
                            </div>
                            <div className="tv-right">
                                <h1>3.3M</h1>
                            </div>
                        </div>

                        <hr className="tv-hr"/>

                        <div className="total-visits-content">
                            <div className="tv-left">
                                <img src={Clock} alt="" />
                                <h1>Avg. Visit Duration</h1>
                            </div>
                            <div className="tv-right">
                                <h1>00:11:57</h1>
                            </div>
                        </div>

                        <hr className="tv-hr"/>

                        <div className="total-visits-content">
                            <div className="tv-left">
                                <img src={Eye} alt="" />
                                <h1>Pages per Visit</h1>
                            </div>
                            <div className="tv-right">
                                <h1>8.91</h1>
                            </div>
                        </div>

                        <hr className="tv-hr"/>

                        <div className="total-visits-content">
                            <div className="tv-left">
                                <img src={Stats} alt="" />
                                <h1>Bounce Rate</h1>
                            </div>
                            <div className="tv-right">
                                <h1>27.57%</h1>
                            </div>
                        </div>

                        <hr className="tv-hr"/>

                        <div className="total-visits-content">
                            <div className="tv-left" id="tv-bottom">
                                <h1>Total Visits</h1>
                            </div>
                            <div className="tv-right" id="tv-bottom">
                                <h1>92.09B</h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    );
};

export default Right;