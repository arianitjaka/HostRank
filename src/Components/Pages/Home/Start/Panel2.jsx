import React,{useState} from 'react';
import { types } from './data';
import './Panel.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
const data1 = {
    labels: ['#1', '#1', '#3', '#4', '#5', '#6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgba(128, 128, 128, 0.5)',
          'blue',
          '#45b3e6',
          'rgba(75, 192, 192, 0.2)',
          '#abd8ec',
        ],
        borderColor: [
          'rgba(128, 128, 128, 0.075)',
          'rgba(128, 128, 128, 0.075)',
          'rgba(128, 128, 128, 0.075)',
          'rgba(128, 128, 128, 0.075)',
          'rgba(128, 128, 128, 0.075)',
          'rgba(128, 128, 128, 0.075)',,
        ],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: ['E-mail', 'PPPoE', 'Router', 'Wi-fi', 'VoIP', 'New Connection'],
    datasets: [
      {
        label: '# Types',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgba(128, 128, 128, 0.5)',
          'blue',
          '#45b3e6',
          'rgba(75, 192, 192, 0.2)',
          '#abd8ec',
        ],
        borderColor: [
            'rgba(128, 128, 128, 0.075)',
            'rgba(128, 128, 128, 0.075)',
            'rgba(128, 128, 128, 0.075)',
            'rgba(128, 128, 128, 0.075)',
            'rgba(128, 128, 128, 0.075)',
            'rgba(128, 128, 128, 0.075)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
const Panel2=()=>{
    const [startDate, setStartDate] = useState(new Date());
    return(
        <div className="panel2-ext">
            <div className="panel-container">
                <h2>Technical Support Dashboard</h2>
                <div className="tabs-ext">
                    <ul>
                        {types.map((list) =>{
                            return(
                                <li>
                                    {list}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="dates">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <button className="setButton">Set Date</button>
                    </div>
                </div>
                <div className="charts">
                <div className="single-chart">
                <Doughnut data={data1} />
                </div>
                <div className="single-chart2">
                <Bar data={data2} options={options} />
                </div>
                </div>
            </div>
        </div>
    )
};
export default Panel2 ;