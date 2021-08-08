import React from 'react';
import './OrganicResearch.scss';
import ORLeft from './ORLeft/ORLeft';
import ORCenter from './ORCenter/ORCenter';
import ORRight from './ORRight/ORRight';


const OrganicResearch = () => {
    return (
        <div className="organic-research">

            <div className="or-title">
                <h1>Organic Research</h1>
            </div>

            <div className="or-cols">
                <div className="or-col">
                    <ORLeft />
                </div>

                <div className="or-col">
                    <ORCenter />
                </div>

                <div className="or-col">
                    <ORRight />
                </div>
            </div>

        </div>

    );
};

export default OrganicResearch;