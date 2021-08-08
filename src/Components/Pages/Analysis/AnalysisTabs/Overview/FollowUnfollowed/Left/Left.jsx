import React from 'react';
import './Left.scss';


import StatsPic from '../../../../../../../Assets/Analysis/tab1/TrafficOverview/stats-pic.svg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { Line } from 'react-chartjs-2';
const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Branded Traffic',
        data: [0, 8, 0,  2, 15],
        fill: false,
        backgroundColor: '#FFAA00',
        borderColor: '#ffaa0031',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
const Left = () => {
    return (
        <div>

            <div className="btt-left">

                <div className="btt-left-header-content">

                    <div className="btt-left-header">
                        <div className="btt-left-header-title">
                            <h1>Branded Traffic Trend</h1>
                        </div>
                        <div className="btt-left-header-select">
                            <select>
                                <option value="last-6-months">Last 6 Months</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    <div className="btt-stats-pic">
                    <Line data={data} options={options} />
                        {/* <img src={StatsPic} alt="" /> */}
                    </div>
                </div>

                <div className="btt-view-all">
                    <h1>View All</h1>
                    <ArrowRightAltIcon />
                </div>

            </div>

        </div>

    );
};

export default Left;