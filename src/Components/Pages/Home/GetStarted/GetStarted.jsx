import { useState } from 'react';
import './GetStarted.scss';

import DashboardIcon from '../../../../Assets/Home/GetStarted/dashboard.svg';
import GoogleExIcon from '../../../../Assets/Home/GetStarted/google-extension.svg';
import Charts from '../../../../Assets/Home/GetStarted/photo.svg';


const GetStarted = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="get-started">

            <div className="gt-title">
                <h1>Get Started with Hostrank</h1>
            </div>

            <div className="gt-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>
                    <img src={DashboardIcon} alt="" />
                    <h1>Dashboard</h1>
                </div>

                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>
                    <img src={GoogleExIcon} alt="" />
                    <h1>Google Extension</h1>
                </div>
            </div>

            <div className="tabs-content">

                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <div className="charts">
                        <img src={Charts} alt="" />
                    </div>
                </div>

                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <div className="not-found">
                        <h1>Not Found</h1>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default GetStarted;