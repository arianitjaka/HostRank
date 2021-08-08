import React from 'react';
import './DeepMarketInsight.scss';
import { Data } from './Data';


const DeepMarketInsight = () => {
    return (
        <div className="deep-market-insight">

            <div className="dmi-header">
                <h1>Deep Market Insight At Your Fingertips</h1>
                <p>Our online traffic data enables us to deliver an unbiased, objective view of real world web and app performance.</p>
            </div>

            <div className="dmi-cards">

                {Data.map((item) => {
                    return (
                        <div className="card-content">
                            <div className="card-image">
                                <img src={item.icon} alt="" />
                            </div>
                            <div className="card-title">
                                <h1>{item.title}</h1>
                            </div>
                            <div className="card-paragraph">
                                <p>{item.paragraph}</p>
                            </div>
                        </div>
                    )
                })}

            </div>


        </div>
    );
};

export default DeepMarketInsight;