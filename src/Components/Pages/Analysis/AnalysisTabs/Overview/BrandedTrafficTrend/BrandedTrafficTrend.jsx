import React from 'react';
import './BrandedTrafficTrend.scss';
import Left from './Left/Left';
import Right from './Right/Right';



const BrandedTrafficTrend = () => {
    return (
        <div className="branded-traffic-trend-container">

            <Left />
            <Right />

        </div>

    );
};

export default BrandedTrafficTrend;