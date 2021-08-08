import React from 'react';
import '../DisplayAdvertising.scss';

import Gray from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/right/down/gray.svg';
import Green from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/right/down/green.svg';
import Red from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/right/down/red.svg';


const RightDown = () => {
    return (
        <div>

            <div>

                <div className="da-right-down">
                    <div className="right-down-title">
                        <h1>Available tlds</h1>
                    </div>

                    <div className="right-down-info">
                        <h1>The following domains are available through our partners. 
                            Select domains down below to learn more about them.</h1>
                    </div>

                    <div className="right-down-dots">
                        <div className="right-down-dots-content">
                            <img src={Gray} alt="" />
                            <h1>Taken Domain</h1>
                        </div>
                        <div className="right-down-dots-content">
                            <img src={Green} alt="" />
                            <h1>Available Domain</h1>
                        </div>
                        <div className="right-down-dots-content">
                            <img src={Red} alt="" />
                            <h1>Deleted Domains</h1>
                        </div>
                    </div>

                    <div className="right-down-view-whois">
                        <div className="view-whois-content">
                            <button className="view-whois-btn">
                                <h1>Google</h1>
                            </button>
                            <h1>View Whois</h1>
                        </div>

                        <div className="view-whois-content">
                            <button className="view-whois-btn">
                                <h1>Google</h1>
                            </button>
                            <h1>View Whois</h1>
                        </div>

                        <div className="view-whois-content">
                            <button className="view-whois-btn">
                                <h1>Google</h1>
                            </button>
                            <h1>View Whois</h1>
                        </div>

                        <div className="view-whois-content">
                            <button className="view-whois-btn" id="vw-available">
                                <h1>Google</h1>
                            </button>
                            <h1>View Whois</h1>
                        </div>

                        <div className="view-whois-content">
                            <button className="view-whois-btn">
                                <h1>Google</h1>
                            </button>
                            <h1>View Whois</h1>
                        </div>

                        <div className="view-whois-content">
                            <button className="view-whois-btn" id="vw-deleted">
                                <h1>Google</h1>
                            </button>
                            <h1>View Whois</h1>
                        </div>
                    </div>


                    <button className="right-down-view-more">
                        <h1>View More tlds</h1>
                    </button>

                </div>
            </div>

        </div>

    );
};

export default RightDown;