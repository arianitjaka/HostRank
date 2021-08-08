import React from 'react';
import '../CompareDomains/style.scss';
import { Line } from 'react-chartjs-2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { domainData, growthData } from '../CompareDomains/data';
import { Bar } from 'react-chartjs-2';
const data2 = {
    labels: ['#1', '#2', '#3', '#4', '#5', '#6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Domains',
        data: [12, 9, 17, 5, 2, 12],
        fill: false,
        backgroundColor: 'rgb(0, 174, 255)',
        borderColor: 'rgba(7, 192, 7, 0.164)',
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
const Growth=()=>{
    return(
        <div className="compare-domains-tab">
            <div className="content-part">
                <div className="image-part">
                    <div className="first-tab">
                  
                      <div className="chart-part">
                      <Bar data={data2} options={options} />
                      </div>
                 
                      <div className="chart-part">
                      <Line data={data} options={options} />
                      </div>
                      
                      <div className="tabs-part2 tabs-part3">
                      <Tabs>
                    <TabList>
                        <Tab>
                       Organic Traffic
                        </Tab>
                        <Tab>
                       Paid Traffic
                        </Tab>
                        <Tab>
                       Backlinks
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <div className="first-panel second-panel">
                            <div className="circle">
                            </div>
                            <p>Summer 2020</p>
                            <div className="circle circle1">
                            </div>
                            <p>Autumn 2020</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="first-panel second-panel">
                            <div className="circle circle1">
                            </div>
                            <p>Autumn 2020</p>
                            <div className="circle">
                            </div>
                            <p>Summer 2020</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="first-panel second-panel">
                            <div className="circle">
                            </div>
                            <p>Summer 2020</p>
                            <div className="circle circle1">
                            </div>
                            <p>Autumn 2020</p>
                        </div>
                    </TabPanel>
                    </Tabs>
                      </div>
                    </div>
                </div>
                <div className="content">
                    <h2>Compare your domain performance by time periods</h2>
                    <ul>
                        {growthData.map((item) =>{
                            return(
                                <li>
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <p>{item.desc}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
    )
};
export default Growth;