import React , {useEffect} from 'react';
import AOS from 'aos';
import Header from '../Components/Pages/Home/Header/Header';
import WhoIsHostRankFor from '../Components/Pages/Home/WhoIsHostRankFor/WhoIsHostRankFor';
import Statistics from '../Components/Pages/Home/Statistics/Statistics';
import Seo from '../Components/Pages/Home/Seo/Seo';
import Platform from '../Components/Pages/Home/Platform/Platform';
import TrafficData from '../Components/Pages/Home/TrafficData/TrafficData';
import SecondPlatform from '../Components/Pages/Home/SecondPlatform/SecondPlatform';
import Monetization from '../Components/Pages/Home/Monetization/Monetization';
import WhoUsesHostRank from '../Components/Pages/Home/WhoUsesHostRank/WhoUsesHostRank';
import DigitalPlatforms from '../Components/Pages/Home/DigitalPlatforms/DigitalPlatforms';
import DeepMarketInsight from '../Components/Pages/Home/DeepMarketInsight/DeepMarketInsight';
import FrequentlyAskedQuestions from '../Components/Pages/Home/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import Start from '../Components/Pages/Home/Start/Start';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      disable: 'mobile',
      once: true,
    });
  }, []);
    return (
      <div>
        <Header />   
        <Start />  
        <WhoIsHostRankFor />   
        <Statistics />   
        <Seo />   
        <Platform />   
        <TrafficData /> 
        <SecondPlatform />   
        <Monetization />   
        <WhoUsesHostRank />   
        <DigitalPlatforms />   
        <DeepMarketInsight />   
        <FrequentlyAskedQuestions />   
      </div>
    );
}
  
export default Home;
