import React from 'react';
import './Banner.scss';
import Pic1 from '../../../../Assets/Home/Header/1.svg';
import RequestDemo from '../../../../Assets/Home/Header/request-a-demo.svg';
import SearchIcon from '../../../../Assets/Home/Header/search-icon.svg';
import ArrowDown from '../../../../Assets/Home/Header/arrow-down.svg';
import SharedTable from './SharedTable';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="banner">

            <div className="left">
                <div className="banner-header">
                    <img src={Pic1} alt="" />
                    <h1 data-aos="fade-right"
              data-aos-easing="ease-in-out-back"
              data-aos-delay={200}>SEO AND COMPETITIVE ANALYSIS SOFTWARE</h1>
                </div>
                <div className="banner-title">
                    <h1 data-aos="fade-right"
              data-aos-easing="ease-in-out-back"
              data-aos-delay={300}>Discover Your Website <br /> Audience Online</h1>
                </div>
                <div className="banner-paragraph">
                    <p data-aos="fade-right"
              data-aos-easing="ease-in-out-back"
              data-aos-delay={400}>Get better marketing results with our services by finding untapped opportunities to grow your business online.</p>
                </div>

                <div className="banner-buttons">
                    <div className="left-button" data-aos="flip-down" data-aos-delay={800}>
                        <Link>
                            <h1>Start Your Free Trial</h1>
                        </Link>
                    </div>

                    <div className="right-button" data-aos="flip-down" data-aos-delay={800}>
                        <Link>
                            <img src={RequestDemo} alt="" />
                            <h1>Request a Demo</h1>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="serach-bar">
                    <div className="icon-and-text">
                        <img src={SearchIcon} alt="" />
                        <input type="text" placeholder="Analyze any Website or App" className="searchbar-input"/>
                    </div>

                    <div className="website-select">
                        <h1>Website</h1>
                        <img src={ArrowDown} alt="" />
                    </div>
                </div>

                <div className="table">
                    <SharedTable />
                </div>
            </div>

        </div>
    );
};

export default Banner;