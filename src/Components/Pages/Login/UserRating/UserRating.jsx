import React, { useState } from 'react';
import './UserRating.scss';
import Slider from 'react-slick';

import P1 from '../../../../Assets/Login/Carousel/p1.png';
import P2 from '../../../../Assets/Login/Carousel/p2.png';
import P3 from '../../../../Assets/Login/Carousel/p3.png';
import RatingStars from '../../../../Assets/Login/Carousel/rating.svg';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const images = [P1, P2, P3, P1, P2, P3]


const UserRating = () => {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <ChevronRightIcon />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <ChevronLeftIcon />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0)

    const settings = {
        centerMode: true,
        infinite: true,
        lazyload: true,
        centerPadding: 0,
        slidesToShow: 3,
        speed: 300,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };

    return (
        <div className="user-rating">
            <div className="user-rating-title">
                <h1>Learn what are users saying</h1>
            </div>

            <div className="rating-slider-container">
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div className={index === imageIndex ? "rating-slide active-rating-slide" : "rating-slide"}>
                            <img src={img} alt="" />
                            <h1 className="slide-user-name">Luke Richardson</h1>
                            <p className="slide-user-job">Digital Marketing Manager</p>
                            <p className="slide-user-feedback">"I did a trial of about 30 SEO tools and I think that HostRank has the lowestbarrier to entry of them all.
                            It's user-friendly and easy to use. And that data visualizations make digesting the information quick and easy."</p>
                            <img src={RatingStars} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    )
};

export default UserRating;

