import React from 'react';
import './Ranks.scss';

import Global from '../../../../../../Assets/Analysis/tab1/Ranks/global-rank.svg';
import Country from '../../../../../../Assets/Analysis/tab1/Ranks/country-rank.svg';
import Category from '../../../../../../Assets/Analysis/tab1/Ranks/category-rank.svg';
import DisplayAds from '../../../../../../Assets/Analysis/tab1/Ranks/display-ads.svg';


const Ranks = () => {
    return (
        <div className="ranks-container">

            <div className="rank-content">
                <h1>Global Rank</h1>
                <p>#1</p>
                <div className="rank-icon">
                    <img src={Global} alt="" />
                </div>
            </div>

            <div className="rank-content">
                <h1>Country Rank</h1>
                <p>#1</p>
                <div className="rank-icon">
                    <img src={Country} alt="" />
                </div>
            </div>

            <div className="rank-content">
                <h1>Category Rank</h1>
                <p>#1</p>
                <div className="rank-icon">
                    <img src={Category} alt="" />
                </div>
            </div>

            <div className="rank-content">
                <h1>Display Advertising</h1>
                <p>#1</p>
                <div className="rank-icon">
                    <img src={DisplayAds} alt="" />
                </div>
            </div>

        </div>

    );
};

export default Ranks;