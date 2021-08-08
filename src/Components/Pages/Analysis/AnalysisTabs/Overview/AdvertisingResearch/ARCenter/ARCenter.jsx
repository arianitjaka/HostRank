import React from 'react';
import '../AdvertisingResearch.scss';

import Bar1 from '../../../../../../../Assets/Analysis/tab1/AdvertisingResearch/bar1.svg';
import Bar2 from '../../../../../../../Assets/Analysis/tab1/AdvertisingResearch/bar2.svg';
import Bar3 from '../../../../../../../Assets/Analysis/tab1/AdvertisingResearch/bar3.svg';
import Bar4 from '../../../../../../../Assets/Analysis/tab1/AdvertisingResearch/bar4.svg';
import Bar5 from '../../../../../../../Assets/Analysis/tab1/AdvertisingResearch/bar5.svg';


const ARCenter = () => {
    return (
        <div>

            <div className="main-organic-competitors-title">
                <h1>Main Organic Competitors</h1>
            </div>
            <div className="main-organic-competitors-content">
                <div className="tok-left">
                    <h1>Competitor</h1>
                </div>
                <div className="tok-center">
                    <h1>Com. level</h1>
                </div>
                <div className="tok-right">
                    <h1>Keywords</h1>
                </div>
            </div>

            <hr className="ar-hr" />

            <div className="main-organic-competitors-content">
                <div className="tok-left">
                    <h1>pdffiller.com</h1>
                </div>
                <div className="tok-center">
                    <img src={Bar1} alt="" />
                </div>
                <div className="tok-right">
                    <h1>8,089</h1>
                </div>
            </div>

            <hr className="ar-hr" />

            <div className="main-organic-competitors-content">
                <div className="moc-left">
                    <h1>pdfsimpli.com</h1>
                </div>
                <div className="moc-center">
                    <img src={Bar2} alt="" />
                </div>
                <div className="moc-right">
                    <h1>3,815</h1>
                </div>
            </div>

            <hr className="ar-hr" />

            <div className="main-organic-competitors-content">
                <div className="moc-left">
                    <h1>info.com</h1>
                </div>
                <div className="moc-center">
                    <img src={Bar3} alt="" />
                </div>
                <div className="moc-right">
                    <h1>80,750</h1>
                </div>
            </div>

            <hr className="ar-hr" />

            <div className="main-organic-competitors-content">
                <div className="moc-left">
                    <h1>docusing.com</h1>
                </div>
                <div className="moc-center">
                    <img src={Bar4} alt="" />
                </div>
                <div className="moc-right">
                    <h1>3,593</h1>
                </div>
            </div>

            <hr className="ar-hr" />

            <div className="main-organic-competitors-content">
                <div className="moc-left">
                    <h1>microsoft.com</h1>
                </div>
                <div className="moc-center">
                    <img src={Bar5} alt="" />
                </div>
                <div className="moc-right">
                    <h1>47,812</h1>
                </div>
            </div>

        </div>

    );
};

export default ARCenter;