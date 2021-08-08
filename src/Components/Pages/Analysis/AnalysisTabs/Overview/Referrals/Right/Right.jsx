import React from 'react';
import './Right.scss';

import Google from '../../../../../../../Assets/Analysis/tab1/Referrals/google.svg';
import Clever from '../../../../../../../Assets/Analysis/tab1/Referrals/clever.svg';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


const Right = () => {
    return (
        <div>

            <div className="r-right">
                <div className="referring-websites-content">
                    <div className="r-title">
                        <h1>Referring Websites</h1>
                        <p>Top referring sites</p>
                    </div>

                    <div className="r-total-visits">

                        <div className="top-referring-sites-content">
                            <div className="trs-left">
                                <h1>Country</h1>
                            </div>
                            <div className="trs-right">
                                <h1>Traffic</h1>
                            </div>
                        </div>

                        <hr className="trs-hr" />

                        <div className="top-referring-sites-content">
                            <div className="trs-left">
                                <img src={Google} alt="" />
                                <h1>google.fr</h1>
                            </div>
                            <div className="trs-right">
                                <h1>3.58%</h1>
                            </div>
                            <div className="trs-up">
                                <ArrowDropUpIcon />
                                <h1>18.17%</h1>
                            </div>
                        </div>

                        <hr className="trs-hr" />

                        <div className="top-referring-sites-content">
                            <div className="trs-left">
                                <img src={Google} alt="" />
                                <h1>google.it</h1>
                            </div>
                            <div className="trs-right">
                                <h1>3.06%</h1>
                            </div>
                            <div className="trs-up">
                                <ArrowDropUpIcon />
                                <h1>47.37%</h1>
                            </div>
                        </div>

                        <hr className="trs-hr" />

                        <div className="top-referring-sites-content">
                            <div className="trs-left">
                                <img src={Clever} alt="" />
                                <h1>clever.com</h1>
                            </div>
                            <div className="trs-right">
                                <h1>2.53%</h1>
                            </div>
                            <div className="trs-up">
                                <ArrowDropUpIcon />
                                <h1>13.61%</h1>
                            </div>
                        </div>

                        <hr className="trs-hr" />

                        <div className="top-referring-sites-content">
                            <div className="trs-left">
                                <img src={Google} alt="" />
                                <h1>google.com.br</h1>
                            </div>
                            <div className="trs-right">
                                <h1>2.27%</h1>
                            </div>
                            <div className="trs-up">
                                <ArrowDropUpIcon />
                                <h1>23.43%</h1>
                            </div>
                        </div>

                        <hr className="trs-hr" />

                        <div className="top-referring-sites-content">
                            <div className="trs-left">
                                <img src={Google} alt="" />
                                <h1>google.de</h1>
                            </div>
                            <div className="trs-right">
                                <h1>2.04%</h1>
                            </div>
                            <div className="trs-up">
                                <ArrowDropUpIcon />
                                <h1>17.65%</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Right;