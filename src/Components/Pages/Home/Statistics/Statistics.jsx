import React from 'react';
import './Statistics.scss';
import { Data } from './Data';


const Statistics = () => {
    return (
        <div className="statistics">

            {Data.map((item) => {
                return (
                    <div className="statistics-content">
                        <div className="content-image">
                            <img src={item.icon} alt="" />
                        </div>

                        <div className="content-info">
                            <h1>{item.number}</h1>
                            <p>{item.title}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default Statistics;