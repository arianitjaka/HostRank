import React from 'react';
import './TrafficStatistics.scss';
import Left from './Left/Left';

import SearchIcon from '@material-ui/icons/Search';


const TrafficStatistics = () => {
    return (
        <div className="traffic-statistics-container">

            <Left />


            <div className="ts-right">
                <div className="competitors-similar-pages">
                    <div className="csp-title">
                        <h1>Competitors & Similar Pages</h1>
                    </div>

                    <div className="csp-search">
                        <SearchIcon />
                        <input type="text" placeholder="Search google competitors..." />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default TrafficStatistics;