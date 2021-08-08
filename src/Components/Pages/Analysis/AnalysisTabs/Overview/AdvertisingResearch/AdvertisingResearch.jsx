import React from 'react';
import './AdvertisingResearch.scss';
import ARLeft from './ARLeft/ARLeft';
import ARCenter from './ARCenter/ARCenter';
import ARRight from './ARRight/ARRight';



const AdvertisingResearch = () => {
    return (
        <div className="advertising-research-container">

            <div className="ar-title">
                <h1>Advertising Research</h1>
            </div>

            <div className="ar-cols">
                <div className="ar-col">
                    <ARLeft />
                </div>

                <div className="ar-col">
                    <ARCenter />
                </div>

                <div className="ar-col">
                    <ARRight />
                </div>
            </div>

        </div>

    );
};

export default AdvertisingResearch;