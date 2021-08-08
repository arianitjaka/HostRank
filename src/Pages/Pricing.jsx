import React from 'react';
import Header from '../Components/Shared/Header/Header';
import Banner from '../Components/Pages/Pricing/Banner';
import SwitchPrice from '../Components/Pages/Pricing/SwitchPrice';
import FrequentlyAskedQuestions from '../Components/Pages/Home/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
 function Pricing(){
     return(
         <>
         <Header />
         <Banner />
         <SwitchPrice />
         <FrequentlyAskedQuestions />

         </>
     )
 };
 export default Pricing ;