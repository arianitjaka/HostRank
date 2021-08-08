import React from 'react';
import './DigitalPlatforms.scss';

import DHL from '../../../../Assets/Home/DigitalPlatforms/dhl.svg';
import Adidas from '../../../../Assets/Home/DigitalPlatforms/adidas.svg';
import Nike from '../../../../Assets/Home/DigitalPlatforms/nike.svg';
import Google from '../../../../Assets/Home/DigitalPlatforms/google.svg';
import Booking from '../../../../Assets/Home/DigitalPlatforms/booking.svg';
import Walmart from '../../../../Assets/Home/DigitalPlatforms/walmart.svg';
import Adobe from '../../../../Assets/Home/DigitalPlatforms/adobe.svg';
import Airbnb from '../../../../Assets/Home/DigitalPlatforms/airbnb.svg';
import Rover from '../../../../Assets/Home/DigitalPlatforms/rover.svg';



const Slider = () => {
    return (
        <div className="slider">

            <div className="slide-track">
                <div className="slide">
                    <img src={DHL} alt="" />
                </div>

                <div className="slide">
                    <img src={Adidas} alt="" />
                </div>

                <div className="slide">
                    <img src={Nike} alt="" />
                </div>

                <div className="slide">
                    <img src={Google} alt="" />
                </div>

                <div className="slide">
                    <img src={Booking} alt="" />
                </div>

                <div className="slide">
                    <img src={Walmart} alt="" />
                </div>

                <div className="slide">
                    <img src={Adobe} alt="" />
                </div>

                <div className="slide">
                    <img src={Airbnb} alt="" />
                </div>

                <div className="slide">
                    <img src={Rover} alt="" />
                </div>


                {/* Again */}
                <div className="slide">
                    <img src={DHL} alt="" />
                </div>

                <div className="slide">
                    <img src={Adidas} alt="" />
                </div>

                <div className="slide">
                    <img src={Nike} alt="" />
                </div>

                <div className="slide">
                    <img src={Google} alt="" />
                </div>

                <div className="slide">
                    <img src={Booking} alt="" />
                </div>

                <div className="slide">
                    <img src={Walmart} alt="" />
                </div>

                <div className="slide">
                    <img src={Adobe} alt="" />
                </div>

                <div className="slide">
                    <img src={Airbnb} alt="" />
                </div>

                <div className="slide">
                    <img src={Rover} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Slider;