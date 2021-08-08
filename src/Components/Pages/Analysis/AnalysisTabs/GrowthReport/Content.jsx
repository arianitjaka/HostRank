import React from 'react';
import './GrowthReport.scss';


import Pic from '../../../../../Assets/Analysis/tab2/pic.svg';
import Clock from '../../../../../Assets/Analysis/tab4/clock.svg';
import Share from '../../../../../Assets/Analysis/tab4/share.svg';
import Internet from '../../../../../Assets/Analysis/tab4/internet.svg';



const GrowthReportContent = () => {
    return (
        <div className="tab-content-container">
            <div className="tab-content-img">
                <img src={Pic} alt="" />
            </div>
            <div className="tab-content-info">
                <div className="tab-content-info-title">
                    <h1>Compare your domain performance by time periods</h1>
                </div>
                <div className="tab-content-info-img-text">
                    <img src={Clock} alt="" />
                    <h1>Save time on reporting by getting the key data on a domain’s growth trend in one place</h1>
                </div>
                <div className="tab-content-info-img-text">
                    <img src={Internet} alt="" />
                    <h1>Evaluate a domain’s progress for organic traffic, paid traffic, and backlinks for a specific period: three months, a quarter, 6 months, a season, or 1 year</h1>
                </div>
                <div className="tab-content-info-img-text">
                    <img src={Share} alt="" />
                    <h1>Easily export the report to xls or csv</h1>
                </div>
            </div>
        </div>

    );
};

export default GrowthReportContent;