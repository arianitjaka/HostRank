import React from 'react';
import './style.scss';
import { Line } from 'react-chartjs-2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { domainData } from './data';
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
const Domain=()=>{
    return(
        <div className="compare-domains-tab">
            <div className="content-part">
                <div className="image-part">
                    <div className="first-tab">
                      <div className="small-tabs">
                          <div className="tab">
                              <div className="circle">
                            </div>
                            <div className="line"></div>
                          </div>
                          <div className="tab">
                              <div className="circle circle1">
                            </div>
                            <div className="line"></div>
                          </div>
                      </div>
                      <div className="same-tabs">
                          <div className="tab"></div>
                          <div className="tab"></div>
                          <div className="tab"></div>
                          <div className="tab"></div>
                      </div>
                      <div className="chart-part">
                      <Line data={data} options={options} />
                      </div>
                      <div className="tabs-part2">
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
                        <div className="first-panel">
                            <div className="circle">
                            </div>
                            <p>Your Domain</p>
                            <div className="circle circle1">
                            </div>
                            <p>Your Competitor</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="first-panel">
                            <div className="circle circle1">
                            </div>
                            <p>Your Competitor</p>
                            <div className="circle">
                            </div>
                            <p>Your Domain</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="first-panel">
                            <div className="circle">
                            </div>
                            <p>Your Domain</p>
                            <div className="circle circle1">
                            </div>
                            <p>Your Competitor</p>
                        </div>
                    </TabPanel>
                    </Tabs>
                      </div>
                    </div>
                </div>
                <div className="content">
                    <h2>Compare your domain performance against competitors</h2>
                    <ul>
                        {domainData.map((item) =>{
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
export default Domain ;