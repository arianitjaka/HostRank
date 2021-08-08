import React from 'react';
import './Overview.scss';
import Ranks from './Ranks/Ranks';
import TrafficStatistics from './TrafficStatistics/TrafficStatistics';
import TrafficOverview from './TrafficOverview/TrafficOverview';
import TrafficByCountry from './TrafficByCountry/TrafficByCountry';
import Referrals from './Referrals/Referrals';
import OrganicResearch from './OrganicResearch/OrganicResearch';
import BrandedTrafficTrend from './BrandedTrafficTrend/BrandedTrafficTrend';
import AdvertisingResearch from './AdvertisingResearch/AdvertisingResearch';
import FollowUnfollowed from './FollowUnfollowed/FollowUnfollowed';
import DisplayAdvertising from './DisplayAdvertising/DisplayAdvertising';




const Overview = () => {
    return (
        <div>
            <Ranks />
            <TrafficStatistics />
            <TrafficOverview />
            <TrafficByCountry />
            <Referrals />
            <OrganicResearch />
            <BrandedTrafficTrend />
            <AdvertisingResearch />
            <FollowUnfollowed />
            <DisplayAdvertising />
        </div>

    );
};

export default Overview;