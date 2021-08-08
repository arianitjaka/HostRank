import React from 'react';
import './DigitalPlatforms.scss';
import Slider from './Slider';
import { Link } from 'react-router-dom';



const DigitalPlatforms = () => {
    return (
        <div className="digital-platforms">

            <div className="dp-title">
                <h1>Trusted by the best digital platforms online</h1>
            </div>

            <Slider />

            <button className="dp-button">
                <Link>
                    <h1>View All Partners</h1>
                </Link>
            </button>

        </div>
    );
};

export default DigitalPlatforms;