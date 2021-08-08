import React, { useState } from 'react';
import './AnalysisTabs.scss';
import Overview from '../AnalysisTabs/Overview/Overview';
import CompareCompanies from '../AnalysisTabs/CompareCompanies/CompareCompanies';
import CompareDomains from '../AnalysisTabs/CompareDomains/CompareDomains';
import GrowthReport from '../AnalysisTabs/GrowthReport/GrowthReport';
import CompareByCountries from '../AnalysisTabs/CompareByCountries/CompareByCountries';



const AnalysisTabs = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="analysis-tabs-container">

            <div className="analysis-tabs">
                <div className={toggleState === 1 ? "a-tab active-a-tab" : "a-tab"} onClick={() => toggleTab(1)}>Overview</div>
                <div className={toggleState === 2 ? "a-tab active-a-tab" : "a-tab"} onClick={() => toggleTab(2)}>Compare Companies</div>
                <div className={toggleState === 3 ? "a-tab active-a-tab" : "a-tab"} onClick={() => toggleTab(3)}>Compare domains</div>
                <div className={toggleState === 4 ? "a-tab active-a-tab" : "a-tab"} onClick={() => toggleTab(4)}>Growth report</div>
                <div className={toggleState === 5 ? "a-tab active-a-tab" : "a-tab"} onClick={() => toggleTab(5)}>Compare by countries</div>
            </div>


            <div className="analysis-tabs-content">

                <div className={toggleState === 1 ? "a-content active-a-content" : "a-content"}>
                    <Overview />
                </div>

                <div className={toggleState === 2 ? "a-content active-a-content" : "a-content"}>
                    <CompareCompanies />
                </div>

                <div className={toggleState === 3 ? "a-content active-a-content" : "a-content"}>
                    <CompareDomains />
                </div>

                <div className={toggleState === 4 ? "a-content active-a-content" : "a-content"}>
                    <GrowthReport />
                </div>

                <div className={toggleState === 5 ? "a-content active-a-content" : "a-content"}>
                    <CompareByCountries />
                </div>

            </div>

        </div>

    );
};

export default AnalysisTabs;