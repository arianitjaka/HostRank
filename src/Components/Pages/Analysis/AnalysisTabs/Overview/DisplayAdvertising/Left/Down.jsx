import React from 'react';
import '../DisplayAdvertising.scss';
import { Link } from 'react-router-dom';

import YouTube from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/up/youtube.svg';
import PS from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/up/ps.svg';
import Yahoo from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/up/yahoo.svg';
import SearchIcon from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/up/search-icon.svg';
import Poki from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/up/poki.svg';
import StatsColor from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/up/stats-colors.svg';


const LeftDown = () => {
    return (
        <div>

            <div>
                
                <div className="da-down">
                    <div>
                        <div className="da-down-cols">
                            <div className="down-cols-content">
                                <div className="cols-content-domain">
                                    <h1>Domain</h1>
                                </div>
                                <div className="cols-content-backlinks">
                                    <h1>Backlinks</h1>
                                </div>
                            </div>
                        </div>

                        <hr className="da-hr"/>

                        <div className="da-down-cols">
                            <div className="down-cols-content">
                                <div className="cols-content-domain">
                                    <img src={YouTube} alt="" />
                                    <h1>youtube.com</h1>
                                </div>
                                <div className="cols-content-backlinks">
                                    <h1>1,246,032,522</h1>
                                </div>
                            </div>
                        </div>

                        <hr className="da-hr"/>

                        <div className="da-down-cols">
                            <div className="down-cols-content">
                                <div className="cols-content-domain">
                                    <img src={PS} alt="" />
                                    <h1>dramacool.vc</h1>
                                </div>
                                <div className="cols-content-backlinks">
                                    <h1>530,768,514</h1>
                                </div>
                            </div>
                        </div>

                        <hr className="da-hr"/>

                        <div className="da-down-cols">
                            <div className="down-cols-content">
                                <div className="cols-content-domain">
                                    <img src={Yahoo} alt="" />
                                    <h1>yahoo.com</h1>
                                </div>
                                <div className="cols-content-backlinks">
                                    <h1>245,614,655</h1>
                                </div>
                            </div>
                        </div>

                        <hr className="da-hr"/>

                        <div className="da-down-cols">
                            <div className="down-cols-content">
                                <div className="cols-content-domain">
                                    <img src={SearchIcon} alt="" />
                                    <h1>search-assistbar.estart.jp</h1>
                                </div>
                                <div className="cols-content-backlinks">
                                    <h1>223,192,197</h1>
                                </div>
                            </div>
                        </div>

                        <hr className="da-hr"/>

                        <div className="da-down-cols">
                            <div className="down-cols-content">
                                <div className="cols-content-domain">
                                    <img src={Poki} alt="" />
                                    <h1>poki.com</h1>
                                </div>
                                <div className="cols-content-backlinks">
                                    <h1>216,902,566</h1>
                                </div>
                            </div>
                        </div>

                        <hr className="da-hr"/>

                        <button className="da-button">
                            <Link><h1>View More Publishers</h1></Link>
                        </button>

                    </div>

                    <div>
                        <div className="da-down-stats">
                            {/* <img src={StatsColor} alt="" /> */}
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default LeftDown;