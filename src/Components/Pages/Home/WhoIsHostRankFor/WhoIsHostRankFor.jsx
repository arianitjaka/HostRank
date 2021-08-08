import React from 'react'
import './WhoIsHostRankFor.scss';
import { Data } from './Data';


const WhoIsHostRankFor = () => {
    return (
        <div className="who-is-host-rank-for">

            <div className="title">
                <h1>Who is HostRank for?</h1>
                <p>Our innovative traffic intelligence solutions empowers bussines owners to make better decisions</p>
            </div>

            <div className="cols-div">

                {Data.map((item) => {
                    return (
                        <div className="col-content">
                            <div className="col-image">
                                <img src={item.icon} alt="" />
                            </div>
                            <div className="col-title">
                                <h5>{item.title}</h5>
                            </div>
                            <div className="col-paragraph">
                                <p>{item.info}</p>
                            </div>
                            <hr />
                            <div className="col-dots">
                                <img src={item.dotIcon} alt="" />
                                <h6>{item.dot1}</h6>
                            </div>
                            <div className="col-dots">
                                <img src={item.dotIcon} alt="" />
                                <h6>{item.dot2}</h6>
                            </div>
                            <div className="col-dots">
                                <img src={item.dotIcon} alt="" />
                                <h6>{item.dot3}</h6>
                            </div>
                            <hr />
                            <div className="learn-more">
                                <h6>{item.learnMore}</h6>
                                <img src={item.learnMoreArrow} alt="" />
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    );
};

export default WhoIsHostRankFor;