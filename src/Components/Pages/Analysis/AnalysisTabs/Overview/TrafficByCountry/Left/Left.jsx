import React from 'react';
import './Left.scss';

import Mobile from '../../../../../../../Assets/Analysis/tab1/TrafficOverview/mobile.svg';
import Desktop from '../../../../../../../Assets/Analysis/tab1/TrafficOverview/desktop.svg';
import Map from '../../../../../../../Assets/Analysis/tab1/TrafficByCountry/map.svg';
import StatsTable from '../../../../../../../Assets/Analysis/tab1/TrafficByCountry/stats-table.svg';



const Left = () => {
    return (
        <div>

            <div className="tbc-left">

                <div className="tbc-left-header-content">

                    <div className="tbc-title">
                        <h1>Traffic by country</h1>
                    </div>

                    <div className="tbc-left-header">
                        <div className="tbc-left-header-title">
                            <div className="tbc-header-title-icons">
                                <img src={Mobile} alt="" />
                                <img src={Desktop} alt="" />
                            </div>
                            <h1>On desktop & mobile web, in the last 6 months</h1>
                        </div>
                        <div className="tbc-left-header-select">
                            <select>
                                <option value="last-6-months">Last 6 Months</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    <div className="tbc-stats">
                        <div className="tbc-map-pic">
                            <img src={Map} alt="" />
                        </div>
                        <div className="tbc-stats-table">
                            {/* <img src={StatsTable} alt="" /> */}
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Left;