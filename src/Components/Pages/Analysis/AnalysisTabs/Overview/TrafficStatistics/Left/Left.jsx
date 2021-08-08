import React from 'react';
import './Left.scss';
import { Line } from 'react-chartjs-2';
import Stats from '../../../../../../../Assets/Analysis/tab1/TrafficStatistics/stats.svg';
const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Traffic Statistics',
        data: [12, 19, 3, 5, 2, 3],
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

            <div className="ts-left">
                <h1 className="ts-title">Traffic Statistics</h1>

                <div className="tf-left-content">
                    <div className="ts-left-header">
                        <div className="ts-left-header-title">
                            <h1>Hostrank Place</h1>
                        </div>
                        <div className="ts-left-header-select">
                            <select>
                                <option value="last-6-months">Last 6 Months</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    <div className="ts-this-site-ranks">
                        <h1>The site ranks:</h1>
                        <div className="tsr-content">
                            <div className="tsr-content-rank">
                                <h1>#1</h1>
                            </div>
                            <h1>In global internet traffic and engagement over <br /> the past 6 months.</h1>
                        </div>
                    </div>

                    <div className="ts-stats">
                    <Line data={data} options={options} />
                     
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Left;