import React from 'react';
import './TrafficByCountry.scss';
import Left from './Left/Left';
import Right from './Right/Right';



const TrafficByCountry = () => {
    return (
        <div className="traffic-by-country-container">

            <Left />
            <Right />

        </div>

    );
};

export default TrafficByCountry;