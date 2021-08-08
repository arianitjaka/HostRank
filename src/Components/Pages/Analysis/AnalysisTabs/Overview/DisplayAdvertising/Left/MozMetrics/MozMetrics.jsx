import React from 'react';
import './MozMetrics.scss';

import Stats from '../../../../../../../../Assets/Analysis/tab1/DisplayAdvertising/down/stats.svg';
import { Doughnut } from 'react-chartjs-2';
const data1 = {

    datasets: [
      {
        data: [19, 12,],
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
const MozMetrics = () => {
    return (
        <div>

            <div className="mm-container">
                <div className="mm-title">
               
                    <h1>Moz Metrics</h1>
                </div>

                <div className="mm-stats-cols">
                    <div className="mm-stats-cols-content">
                    <Doughnut data={data1} />
                        <h1>Domain Authority</h1>
                    </div>

                    <div className="mm-stats-cols-content">
                           <Doughnut data={data1} />
                        <h1>Page Authority</h1>
                    </div>

                    <div className="mm-stats-cols-content">
                           <Doughnut data={data1} />
                        <h1>Moz Rank</h1>
                    </div>

                    <div className="mm-stats-cols-content">
                           <Doughnut data={data1} />
                        <h1>Trustworthiness</h1>
                    </div>

                    <div className="mm-stats-cols-content">
                           <Doughnut data={data1} />
                        <h1>Child Safety</h1>
                    </div>

                    <div className="mm-stats-cols-content">
                           <Doughnut data={data1} />
                        <h1>Adult Content</h1>
                    </div>

                    <div className="mm-stats-cols-content">
                           <Doughnut data={data1} />
                        <h1>Page Authority</h1>
                    </div>

                    <div className="mm-stats-cols-content">
                           <Doughnut data={data1} />
                        <h1>Moz Rank</h1>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default MozMetrics;