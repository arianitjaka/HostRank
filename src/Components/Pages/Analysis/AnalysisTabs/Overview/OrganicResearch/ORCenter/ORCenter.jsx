import React from 'react';
import '../OrganicResearch.scss';

import Bar from '../../../../../../../Assets/Analysis/tab1/OrganicResearch/bar.svg';


const ORCenter = () => {
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

            <hr className="or-hr" />

            <div className="main-organic-competitors-content">
                <div className="tok-left">
                    <h1>apple.com</h1>
                </div>
                <div className="tok-center">
                    <img src={Bar} alt="" />
                </div>
                <div className="tok-right">
                    <h1>2,721,644</h1>
                </div>
            </div>

            <hr className="or-hr" />

            <div className="main-organic-competitors-content">
                <div className="moc-left">
                    <h1>amazon.com</h1>
                </div>
                <div className="moc-center">
                    <img src={Bar} alt="" />
                </div>
                <div className="moc-right">
                    <h1>4,043,537</h1>
                </div>
            </div>

            <hr className="or-hr" />

            <div className="main-organic-competitors-content">
                <div className="moc-left">
                    <h1>wikipedia.org</h1>
                </div>
                <div className="moc-center">
                    <img src={Bar} alt="" />
                </div>
                <div className="moc-right">
                    <h1>3,773,818</h1>
                </div>
            </div>

            <hr className="or-hr" />

            <div className="main-organic-competitors-content">
                <div className="moc-left">
                    <h1>pinterest.org</h1>
                </div>
                <div className="moc-center">
                    <img src={Bar} alt="" />
                </div>
                <div className="moc-right">
                    <h1>3,813,386</h1>
                </div>
            </div>

            <hr className="or-hr" />

            <div className="main-organic-competitors-content">
                <div className="moc-left">
                    <h1>facebook.com</h1>
                </div>
                <div className="moc-center">
                    <img src={Bar} alt="" />
                </div>
                <div className="moc-right">
                    <h1>3,836,037</h1>
                </div>
            </div>

        </div>

    );
};

export default ORCenter;