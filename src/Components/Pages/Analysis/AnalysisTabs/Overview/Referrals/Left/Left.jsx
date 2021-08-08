import React from 'react';
import './Left.scss';

import Mobile from '../../../../../../../Assets/Analysis/tab1/TrafficOverview/mobile.svg';
import Desktop from '../../../../../../../Assets/Analysis/tab1/TrafficOverview/desktop.svg';
import StatsPic from '../../../../../../../Assets/Analysis/tab1/TrafficOverview/stats-pic.svg';
import { Line } from 'react-chartjs-2';
const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Referrals',
        data: [0, 1, 20, 3, 12, 5],
        fill: false,
        backgroundColor: '#003CFF',
        borderColor: 'rgba(128, 128, 128, 0.2)',
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

            <div className="r-left">

                <div className="r-title">
                    <h1>Referrals</h1>
                    <p>Growth and total visits made to google.com</p>
                </div>

                <div className="r-left-header-content">
                    <div className="r-left-header">
                        <div className="r-left-header-title">
                            <div className="r-header-title-icons">
                                <img src={Mobile} alt="" />
                                <img src={Desktop} alt="" />
                            </div>
                            <h1>On desktop & mobile web, in the last 6 months</h1>
                        </div>
                        <div className="r-left-header-select">
                            <select>
                                <option value="last-6-months">Last 6 Months</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    <div className="r-stats-pic">
                    <Line data={data} options={options} />
                        {/* <img src={StatsPic} alt="" /> */}
                    </div>
                </div>


            </div>

        </div>

    );
};

export default Left;