import React from 'react';
import './DisplayAdvertising.scss';
import Left from './Left/Left';
import MozMetrics from './Left/MozMetrics/MozMetrics';
import RightUp from './Right/Up';
import RightDown from './Right/Down';



const DisplayAdvertising = () => {
    return (
        <div className="display-ads-continer">

            <div className="da-left">
                <Left />

                <div className="mm-left">
                   <MozMetrics /> 
                </div>

            </div>

            <div className="da-right">
                <RightUp />
                <RightDown />
            </div>

        </div>

    );
};

export default DisplayAdvertising;