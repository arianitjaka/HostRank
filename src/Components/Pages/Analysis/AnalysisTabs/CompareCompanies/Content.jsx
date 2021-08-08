import React from 'react';
import './CompareCompanies.scss';

import Pic from '../../../../../Assets/Analysis/tab2/pic.svg';
import Star from '../../../../../Assets/Analysis/tab2/star.svg';
import Bag from '../../../../../Assets/Analysis/tab2/bag.svg';
import Thumb from '../../../../../Assets/Analysis/tab2/thumb.svg';



const CompareCompaniesContent = () => {
    return (
        <div className="tab-content-container">
            <div className="tab-content-img">
                <img src={Pic} alt="" />
            </div>
            <div className="tab-content-info">
                <div className="tab-content-info-title">
                    <h1>Compare two different companies</h1>
                </div>
                <div className="tab-content-info-img-text">
                    <img src={Star} alt="" />
                    <h1>Perfect your traffic acquisition strategy by getting insights into your competitors’ tactics</h1>
                </div>
                <div className="tab-content-info-img-text">
                    <img src={Bag} alt="" />
                    <h1>Find new opportunities to attract your competitors’ audiences by discovering which sites people visit before</h1>
                </div>
                <div className="tab-content-info-img-text">
                    <img src={Thumb} alt="" />
                    <h1>Identify the most beneficial websites to partner with for user acquisition by checking if your audience parameters match.</h1>
                </div>
            </div>
        </div>

    );
};

export default CompareCompaniesContent;