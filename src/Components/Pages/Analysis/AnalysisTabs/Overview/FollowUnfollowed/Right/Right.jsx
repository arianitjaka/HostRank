import React from 'react';
import './Right.scss';
import { Link } from 'react-router-dom';

import Perc from '../../../../../../../Assets/Analysis/tab1/BrandedTrafficTrend/orange-perc.svg';
import Orange from '../../../../../../../Assets/Analysis/tab1/BrandedTrafficTrend/orange.svg';
import Gray from '../../../../../../../Assets/Analysis/tab1/BrandedTrafficTrend/gray.svg';
import { Doughnut } from 'react-chartjs-2';
const data1 = {
    labels: ["Followed","Unfollowed"],
    datasets: [
      {
        data: [19, 12,],
        backgroundColor: [
          '#FFAA00',
          '#ffaa0031',
          
        ],
        borderColor: [
          'rgba(128, 128, 128, 0.075)',
          'rgba(128, 128, 128, 0.075)',
         
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
                        <h1>Follow Vs. Unfollowed</h1>
                    </div>

                    <div className="btt-perc">
                    <Doughnut data={data1} />
                    </div>

                    <div className="btt-stats">
                        <div className="btt-stats-color-content">
                            <div className="btt-stats-color">
                                <img src={Orange} alt="" />
                                <h1>Followed traffic: <span>65.0%</span> </h1>
                            </div>
                            <div className="btt-stats-keywords">
                                <h1>By 1.84M keywords</h1>
                            </div>
                        </div>
                        <div className="btt-stats-color-content">
                            <div className="btt-stats-color">
                                <img src={Gray} alt="" />
                                <h1>Unfollowed traffic: <span>35.0%</span></h1>
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