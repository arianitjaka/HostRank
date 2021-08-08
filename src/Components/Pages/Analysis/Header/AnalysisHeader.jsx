import React from 'react';
import './AnalysisHeader.scss';
import { Link } from "react-router-dom";

import GoogleWindow from '../../../../Assets/Analysis/google-window.svg';
import Star from '../../../../Assets/Analysis/star.svg';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GetAppIcon from '@material-ui/icons/GetApp';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';



const AnalysisHeader = () => {
    return (
        <div className="anaysis-header-container">

            <div className="analysis-header">
                <div className="analysis-overview">
                    <div className="ao-left-text">
                        <h1>Overview: Google Inc.</h1>
                        <ExpandMoreIcon />
                    </div>
                    <div className="ao-right-text">
                        <h1> <span>|</span> Similar sites :
                            <Link> Facbook.com</Link>
                            <Link> Microsoft.com</Link>
                            <Link> Youtube.com</Link>
                        </h1>
                    </div>
                </div>

                <button className="ao-button">
                    <Link><h1>Download pdf. Report</h1></Link>
                    <GetAppIcon />
                </button>

            </div>

            <div className="analysis-header-second">

                <div className="ah-second-left">
                    <select>
                        <option value="worldwide" selected>Region: Worldwide</option>
                        <option value="western-europe">Western Europe</option>
                        <option value="eastern-europe">Eastern Europe</option>
                        <option value="asia">Asia</option>
                        <option value="africa">Africa</option>
                        <option value="middle-east">Middle East</option>
                        <option value="america">America</option>
                    </select>

                    <div className="header-second-date">
                        <CalendarTodayIcon />
                        <h1>March - April 2021 Overview</h1>
                    </div>
                </div>

                <div className="ah-second-right">
                    <div className="ahs-right-star-title">
                        <img src={Star} alt="" />
                        <div className="ahs-right-title">
                            <h1>HOSTRANK</h1>
                        </div>
                    </div>

                    <div className="ahs-right-hashtag">
                        <h1>#1</h1>
                    </div>

                </div>

            </div>


            <img src={GoogleWindow} alt="" />

        </div>

    );
};

export default AnalysisHeader;