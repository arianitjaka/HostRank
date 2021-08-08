import React from 'react';
import './TrafficOverview.scss';
import Left from './Left/Left';
import Right from './Right/Right';


const TrafficOverview = () => {
    return (
        <div className="traffic-overview-container">

            <Left />
            <Right />

        </div>

    );
};

export default TrafficOverview;