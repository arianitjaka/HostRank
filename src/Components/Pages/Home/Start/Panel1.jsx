import React from 'react';
import './Panel.scss';
import Select from 'react-select';
import {BsThreeDots} from 'react-icons/bs';
import {MdAddCircleOutline} from 'react-icons/md';
import { performanceData, tables1 } from './data';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
const data3 = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Installs',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'gray',
        borderColor: 'rgba(128, 128, 128, 0.1)',
        yAxisID: 'y-axis-1',
      },
      {
        label: '# of No Installs',
        data: [1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'rgba(128, 128, 128, 0.075)',
        yAxisID: 'y-axis-2',
      },
    ],
  };
  const options3 = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };
const style = {
    control: base => ({
      ...base,
    //   border: 0,
      boxShadow: "none",
      borderRadius: "8px",
      height: "45px",
     })
  }; 
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Installs',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'rgba(128, 128, 128, 0.075)',
      },
    ],
  };
  const data2 = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# Facebook Ads',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'blue',
      },
      {
        label: '# Apple Search Ads',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'gray',
      },
      {
        label: '# Ads',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(54, 162, 235)',
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
const Panel1=()=>{
    return(
        <div className="panel1-dashboard">
            <div className="panel-container">
            <div className="first-section">
                <h2>Custom Dashboard</h2>
             <Select 
            className="selectform"
            styles={style}
            placeholder='Dec 1,2020 - Dec 8,2020'
            theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: ' rgba(128, 128, 128, 0.178)',
              primary: ' #000e29a4',
            },
          })}
        />
            </div>
            <div className="second-section">
           <div className="second1">
           <Select 
            className="selectform"
            styles={style}
            placeholder='Add Performance'
            theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: ' rgba(128, 128, 128, 0.178)',
              primary: ' #000e29a4',
            },
          })}
        />
        <button className="addbutton">+</button>
      </div>
      <div className="second2">
          <button className="actionsbtn">Actions</button>
          <button className="widgetbtn"> Add Widget</button>
      </div>
            </div>
            <div className="cards">
                {tables1.map((table) =>{
                    return(
                        <div className="table">
                            <h2>{table.title}</h2>
                            <h1>{table.number}</h1>
                        </div>
                    )
                })}
            </div>
            <div className="charts-container">
                <div className="line-chart">
                    <h3>Daily Installs</h3>
                    <Line data={data} options={options} />
                </div>
                <div className="line-chart">
                <h3>Daily Installs</h3>
                    <Bar
	          data={data2} options={options} />
                </div>
                <div className="line-chart">
                <h3>Daily Installs</h3>
                <Line data={data3} options={options3} />
                </div>
            </div>
            <div className="performance">
              <h2>Aggregated performance per app</h2>
              <ul>
                {performanceData.map((item) =>{
                  return(
                  <li>
                      <h3>{item.title}</h3>
                    <p>{item.item1}</p>
                    <p>{item.item2}</p>
                  </li>
                  )
                })}
              </ul>
            </div>
            </div>
        </div>
    )
};
export default Panel1 ;