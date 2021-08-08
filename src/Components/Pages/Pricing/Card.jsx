import React from 'react';
import './Styles/Card.scss';
import {FiBox} from 'react-icons/fi';
import Styledlink from '../../Shared/StyledLink/StyledLink';
import { BsBoundingBoxCircles , BsBoundingBox} from 'react-icons/bs';
import { listData } from './data';
const Card=(props)=>{
    return(
        <div className="pricing-cards">
        <div className="price-card">
            <div className="circle">
                <div className="icon">
                    <FiBox />
                </div>
            </div>
            <h2>Free</h2>
            <p>Gain a first hand feel for insights we offer on the
            free version of our platform</p>
            <h2 data-aos="flip-down" data-aos-delay={100}>{props.type}</h2>
            <Styledlink btn="Order Now" styles="large-btn"/>
            <ul>
                {listData.map((item) =>{
                    return(
                        <li>
                            <div className="icon">
                                {item.icon}
                            </div>
                            <p>{item.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className="price-card">
            <div className="circle">
                <div className="icon">
                    <BsBoundingBoxCircles />
                </div>
            </div>
            <h2>Normal</h2>
            <p>Gain a first hand feel for insights we offer on the
            free version of our platform</p>
            <h2 data-aos="flip-down" data-aos-delay={100}>{props.type}</h2>
            <Styledlink btn="Order Now" styles="large-btn"/>
            <ul>
                {listData.map((item) =>{
                    return(
                        <li>
                            <div className="icon">
                                {item.icon}
                            </div>
                            <p>{item.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className="price-card">
            <div className="circle">
                <div className="icon">
                    <BsBoundingBox/>
                </div>
            </div>
            <h2>Enterprise</h2>
            <p>Gain a first hand feel for insights we offer on the
 free version of our platform</p>
            <h2 data-aos="flip-down" data-aos-delay={100}>{props.type}</h2>
            <Styledlink btn="Order Now" styles="large-btn"/>
            <ul>
                {listData.map((item) =>{
                    return(
                        <li>
                            <div className="icon">
                                {item.icon}
                            </div>
                            <p>{item.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
        </div>
    )
};
export default Card ;