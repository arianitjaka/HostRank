import React from 'react';
import './Right.scss';
import { Link } from 'react-router-dom';

import Perc from '../../../../../../../Assets/Analysis/tab1/BrandedTrafficTrend/perc.svg';
import Blue from '../../../../../../../Assets/Analysis/tab1/BrandedTrafficTrend/blue.svg';
import Gray from '../../../../../../../Assets/Analysis/tab1/BrandedTrafficTrend/gray.svg';
import { Doughnut } from 'react-chartjs-2';
const data1 = {
    labels: ['#1', '#1', '#3', '#4', '#5', '#6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgba(128, 128, 128, 0.5)',
          'blue',
          '#45b3e6',
          'rgba(75, 192, 192, 0.2)',
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
        borderWidth: 1,
      },
    ],
  };
const Right = () => {
    return (
        <div>

            <div className="btt-right">
                <div className="btt-content">
                    <div className="btt-title">
                        <h1>Branded Vs. Non-Branded</h1>
                    </div>

                    <div className="btt-perc">
                        {/* <img src={Perc} alt="" /> */}
                        <Doughnut data={data1} />
                    </div>

                    <div className="btt-stats">
                        <div className="btt-stats-color-content">
                            <div className="btt-stats-color">
                                <img src={Blue} alt="" />
                                <h1>Branded traffic: <span>65.0%</span> </h1>
                            </div>
                            <div className="btt-stats-keywords">
                                <h1>By 1.84M keywords</h1>
                            </div>
                        </div>
                        <div className="btt-stats-color-content">
                            <div className="btt-stats-color">
                                <img src={Gray} alt="" />
                                <h1>Non-Branded traffic: <span>35.0%</span></h1>
                            </div>
                            <div className="btt-stats-keywords">
                                <h1>1.84M keywords</h1>
                            </div>
                        </div>
                    </div>

                    <button className="btt-view-details">
                        <Link><h1>View Details</h1></Link>
                    </button>
                </div>

            </div>

        </div>

    );
};

export default Right;