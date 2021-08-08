import React from 'react';
import '../DisplayAdvertising.scss';

import Pic1 from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/right/up/1.svg';
import Pic2 from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/right/up/2.svg';
import Pic3 from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/right/up/3.svg';
import Pic4 from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/right/up/4.svg';
import Pic5 from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/right/up/5.svg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const RightUp = () => {
    return (
        <div>

            <div>
                <div className="da-content-container">
                    <div className="da-title">
                        <h1>Whois History for Google.com</h1>
                    </div>

                    <div className="da-total-visits">

                        <div className="da-right-cols-content">
                            <div className="da-left-img-text">
                                <img src={Pic1} alt="" />
                                <h1>Hosting History Tool</h1>
                            </div>
                            <div className="da-right-icon">
                                <ExpandMoreIcon />
                            </div>
                        </div>

                        <hr className="da-hr" />

                        <div className="da-right-cols-content">
                            <div className="da-left-img-text">
                                <img src={Pic2} alt="" />
                                <h1>Monitor Domain Properties Tool</h1>
                            </div>
                            <div className="da-right-icon">
                                <ExpandMoreIcon />
                            </div>
                        </div>

                        <hr className="da-hr" />

                        <div className="da-right-cols-content">
                            <div className="da-left-img-text">
                                <img src={Pic3} alt="" />
                                <h1>Reverse ip Address Lookup Tool</h1>
                            </div>
                            <div className="da-right-icon">
                                <ExpandMoreIcon />
                            </div>
                        </div>

                        <hr className="da-hr" />

                        <div className="da-right-cols-content">
                            <div className="da-left-img-text">
                                <img src={Pic4} alt="" />
                                <h1>Network Tools</h1>
                            </div>
                            <div className="da-right-icon">
                                <ExpandMoreIcon />
                            </div>
                        </div>

                        <hr className="da-hr" />

                        <div className="da-right-cols-content">
                            <div className="da-left-img-text">
                                <img src={Pic5} alt="" />
                                <h1>Api Service</h1>
                            </div>
                            <div className="da-right-icon">
                                <ExpandMoreIcon />
                            </div>
                        </div>

                        <hr className="da-hr" />

                    </div>
                </div>
            </div>

        </div>

    );
};

export default RightUp;