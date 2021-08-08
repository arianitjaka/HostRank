import { useState } from 'react';
import './WhoUsesHostRank.scss';
import { Link } from 'react-router-dom';

import Target from '../../../../Assets/Home/WhoUsesHostRank/target.svg';

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';



const WhoUsesHostRank = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="who-uses-hostrank">

            <div className="wuhr-title">
                <h1>Who Uses Hostrank?</h1>
            </div>
            {toggleState===1 && 
            <div className="wuhr-content">
                <div className="wuhr-left">
                    <img src={Target} alt="" />
                    <h1>Marketing Strategy</h1>
                    <p>Marketing Directors find opportunities to drive traffic, improve their SEO and PPC, and uncover the best marketing strategy.</p>

                    <div className="wuhr-left-right-buttons">
                        <button className="wuhr-left-button">
                            <Link>
                                <KeyboardArrowLeftIcon />
                            </Link>
                        </button>

                        <button className="wuhr-right-button">
                            <Link>
                                <KeyboardArrowRightIcon />
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="wuhr-right">
                    <h1>"I did a trial of about 30 SEO tools and I think that HostRank has the lowest barrier to entry of them all.
                    It's easy to use. And that data visualizations make digesting the information quick and easy."</h1>

                    <h1 className="wuhr-author">Luke Richardson</h1>
                    <p>Digital Marketing Manager, Vyopta</p>
                </div>
            </div>
       }
                   {toggleState===2 && 
            <div className="wuhr-content">
                <div className="wuhr-left">
                    <img src={Target} alt="" />
                    <h1>Google.com</h1>
                    <p>Marketing Directors find opportunities to drive traffic, improve their SEO and PPC, and uncover the best marketing strategy.</p>

                    <div className="wuhr-left-right-buttons">
                        <button className="wuhr-left-button">
                            <Link>
                                <KeyboardArrowLeftIcon />
                            </Link>
                        </button>

                        <button className="wuhr-right-button">
                            <Link>
                                <KeyboardArrowRightIcon />
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="wuhr-right">
                    <h1>"I did a trial of about 30 SEO tools and I think that HostRank has the lowest barrier to entry of them all.
                    It's easy to use. And that data visualizations make digesting the information quick and easy."</h1>

                    <h1 className="wuhr-author">Luke Richardson</h1>
                    <p>Digital Marketing Manager, Google</p>
                </div>
            </div>
       }
                          {toggleState===3 && 
            <div className="wuhr-content">
                <div className="wuhr-left">
                    <img src={Target} alt="" />
                    <h1>Wall Street Journal</h1>
                    <p>Marketing Directors find opportunities to drive traffic, improve their SEO and PPC, and uncover the best marketing strategy.</p>

                    <div className="wuhr-left-right-buttons">
                        <button className="wuhr-left-button">
                            <Link>
                                <KeyboardArrowLeftIcon />
                            </Link>
                        </button>

                        <button className="wuhr-right-button">
                            <Link>
                                <KeyboardArrowRightIcon />
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="wuhr-right">
                    <h1>"I did a trial of about 30 SEO tools and I think that HostRank has the lowest barrier to entry of them all.
                    It's easy to use. And that data visualizations make digesting the information quick and easy."</h1>

                    <h1 className="wuhr-author">Luke Richardson</h1>
                    <p>Digital Marketing Manager, Wall Street Journal</p>
                </div>
            </div>
       }
                          {toggleState===4 && 
            <div className="wuhr-content">
                <div className="wuhr-left">
                    <img src={Target} alt="" />
                    <h1>The New York Times</h1>
                    <p>Marketing Directors find opportunities to drive traffic, improve their SEO and PPC, and uncover the best marketing strategy.</p>

                    <div className="wuhr-left-right-buttons">
                        <button className="wuhr-left-button">
                            <Link>
                                <KeyboardArrowLeftIcon />
                            </Link>
                        </button>

                        <button className="wuhr-right-button">
                            <Link>
                                <KeyboardArrowRightIcon />
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="wuhr-right">
                    <h1>"I did a trial of about 30 SEO tools and I think that HostRank has the lowest barrier to entry of them all.
                    It's easy to use. And that data visualizations make digesting the information quick and easy."</h1>

                    <h1 className="wuhr-author">Luke Richardson</h1>
                    <p>Digital Marketing Manager, The New York Times</p>
                </div>
            </div>
       }
                            {toggleState===5 && 
            <div className="wuhr-content">
                <div className="wuhr-left">
                    <img src={Target} alt="" />
                    <h1>The Telegraph</h1>
                    <p>Marketing Directors find opportunities to drive traffic, improve their SEO and PPC, and uncover the best marketing strategy.</p>

                    <div className="wuhr-left-right-buttons">
                        <button className="wuhr-left-button">
                            <Link>
                                <KeyboardArrowLeftIcon />
                            </Link>
                        </button>

                        <button className="wuhr-right-button">
                            <Link>
                                <KeyboardArrowRightIcon />
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="wuhr-right">
                    <h1>"I did a trial of about 30 SEO tools and I think that HostRank has the lowest barrier to entry of them all.
                    It's easy to use. And that data visualizations make digesting the information quick and easy."</h1>

                    <h1 className="wuhr-author">Luke Richardson</h1>
                    <p>Digital Marketing Manager, The Telegraph</p>
                </div>
            </div>
       }
                            {toggleState===6 && 
            <div className="wuhr-content">
                <div className="wuhr-left">
                    <img src={Target} alt="" />
                    <h1> AXIOS</h1>
                    <p>Marketing Directors find opportunities to drive traffic, improve their SEO and PPC, and uncover the best marketing strategy.</p>

                    <div className="wuhr-left-right-buttons">
                        <button className="wuhr-left-button">
                            <Link>
                                <KeyboardArrowLeftIcon />
                            </Link>
                        </button>

                        <button className="wuhr-right-button">
                            <Link>
                                <KeyboardArrowRightIcon />
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="wuhr-right">
                    <h1>"I did a trial of about 30 SEO tools and I think that HostRank has the lowest barrier to entry of them all.
                    It's easy to use. And that data visualizations make digesting the information quick and easy."</h1>

                    <h1 className="wuhr-author">Luke Richardson</h1>
                    <p>Digital Marketing Manager,  AXIOS</p>
                </div>
            </div>
       }

            <div className="tabs-div">
                <div className="tabs-content">
                    <div className={toggleState === 1 ? "tab active-tab" : "tab"}
                        onClick={() => toggleTab(1)}>
                        Vyopta.com</div>
                    <div className={toggleState === 2 ? "tab active-tab" : "tab"}
                        onClick={() => toggleTab(2)}>
                        Google.com</div>
                    <div className={toggleState === 3 ? "tab active-tab" : "tab"}
                        onClick={() => toggleTab(3)}>
                        Wall Street Journal</div>
                    <div className={toggleState === 4 ? "tab active-tab" : "tab"}
                        onClick={() => toggleTab(4)}>
                        The New York Times</div>
                    <div className={toggleState === 5 ? "tab active-tab" : "tab"}
                        onClick={() => toggleTab(5)}>
                        The Telegraph</div>
                    <div className={toggleState === 6 ? "tab active-tab" : "tab"}
                        onClick={() => toggleTab(6)}>
                        AXIOS</div>
                </div>
            </div>
      

        </div>
    );
};

export default WhoUsesHostRank;