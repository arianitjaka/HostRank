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
        label: 'Traffic Overview',
        data: [12, 9, 17, 5, 2, 12],
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

            <div className="tsc-left">

                <div className="tsc-title">
                    <h1>Traffic Overview</h1>
                    <p>Growth and total visits made to google.com </p>
                </div>

                <div className="tsc-left-header-content">
                    <div className="tsc-left-header">
                        <div className="tsc-left-header-title">
                            <div className="tsc-header-title-icons">
                                <img src={Mobile} alt="" />
                                <img src={Desktop} alt="" />
                            </div>
                            <h1>On desktop & mobile web, in the last 6 months</h1>
                        </div>
                        <div className="tsc-left-header-select">
                            <select>
                                <option value="last-6-months">Last 6 Months</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    <div className="tsc-stats-pic">
                    <Line data={data} options={options} />
                        {/* <img src={StatsPic} alt="" /> */}
                    </div>
                </div>


            </div>

        </div>

    );
};

export default Left;