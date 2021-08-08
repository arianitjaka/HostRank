import React from 'react';
import './TrafficData.scss';
import { Link } from 'react-router-dom';

import Pic from '../../../../Assets/Home/TrafficData/pic.webp';
import Chrome from '../../../../Assets/Home/TrafficData/chrome.svg';
import Arrow from '../../../../Assets/Home/TrafficData/arrow.svg';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
const data1 = {
 
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgba(128, 128, 128, 0.5)',
          'rgb(150, 67, 67)',
          'rgb(54, 162, 235)',
          'rgb(230, 175, 104)',
          '#abd8ec',
        ],
        borderColor: [
          'rgba(128, 128, 128, 0.075)',
          'rgba(128, 128, 128, 0.075)',
          'rgba(128, 128, 128, 0.075)',
          'rgba(128, 128, 128, 0.075)',
          'rgba(128, 128, 128, 0.075)',
          'rgba(128, 128, 128, 0.075)',,
        ],
        borderWidth: 0,
      },
    ],
  };


const TrafficData = () => {
    return (
        <div className="traffic-data">

            <div className="td-image">
                <img src={Pic} alt="" />
                <div className="image-chart">
                    <h3>Traffic Resources</h3>
                    <p>Aug 2020 - Oct 2020 , Worldwide Desktop Only</p>
                    <h3>Marketing Mix</h3>
                    <div className="chartdata">
                        <div className="chart1">

                    <Doughnut className="chart1" data={data1} />
                    </div>
                    <ul>
                        <li>
                            <h4>Source</h4>
                            <h4>Traffic Source</h4>
                        </li>
                        <li>
                            <div className="first">
                                <div className="circle"></div> <h3>Direct</h3>
                            </div>
                            <h3>46.94%</h3>
                        </li>
                        <li>
                            <div className="first">
                                <div className="circle circle1"></div> <h3>Search</h3>
                            </div>
                            <h3>44.17%</h3>
                        </li>
                        <li>
                            <div className="first">
                                <div className="circle circle2"></div> <h3>Referrals</h3>
                            </div>
                            <h3>3.36%</h3>
                        </li>
                        <li>
                            <div className="first">
                                <div className="circle circle3"></div> <h3>Social</h3>
                            </div>
                            <h3>2.80%</h3>
                        </li>
                        <li>
                            <div className="first">
                                <div className="circle circle4"></div> <h3>Email</h3>
                            </div>
                            <h3>2.67%</h3>
                        </li>
                        <li>
                            <div className="first">
                                <div className="circle circle5"></div> <h3>Display Ads</h3>
                            </div>
                            <h3>0.06%s</h3>
                        </li>
                    </ul>
                       
                    </div>
                </div>
            </div>

            <div className="td-info">
                <div className="info-title">
                    <h1>Website traffic data one click away</h1>
                </div>

                <div className="info-paragraph">
                    <p>Gain insight into any website's statistics & strategy with the click of a button, all in one tab, as you're browsing with the SimilarWeb browser add-on.</p>
                </div>

                <div className="info-buttons">
                    <button className="chrome-button">
                        <img src={Chrome} alt="" />
                        <Link>
                            <h1>Get google chrome extension</h1>
                        </Link>
                    </button>

                    <button className="learn-more">
                        <Link>
                            <h1>Learn More</h1>
                        </Link>
                        <img src={Arrow} alt="" />
                    </button>
                </div>
                
            </div>

        </div>
    );
};

export default TrafficData;