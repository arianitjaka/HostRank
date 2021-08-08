import React from 'react';
import '../DisplayAdvertising.scss';

import Stats from '../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/up/stats.svg';
import { Doughnut } from 'react-chartjs-2';
const data1 = {

    datasets: [
      {
        data: [0, 30,],
        backgroundColor: [
          '#003CFF',
          '#003cff3a',
          
        ],
        borderColor: [
          'rgba(128, 128, 128, 0.075)',
          'rgba(128, 128, 128, 0.075)',
         
        ],
        borderWidth: 1,
      },
    ],
  };

const LeftUp = () => {
    return (
        <div>

            <div>
                <div className="da-up">
                    <div className="da-up-content">
                        <div className="chart-1">

                    <Doughnut data={data1} />
                        </div>
                        <div className="up-content-text">
                            <h1>0.14%</h1>
                            <p>Of traffic is from <span>Display Ads</span></p>
                        </div>
                    </div>
                    <div className="up-content-select">
                        <select>
                            <option value="last-6-months">Last 6 Months</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default LeftUp;