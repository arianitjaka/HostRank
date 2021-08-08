import React from 'react';
import Navbar from '../Components/Pages/Analysis/Nav/Nav';
import AnalysisContent from '../Components/Pages/Analysis/Analysis';
import Header from '../Components/Shared/Header/Header';


const Analysis = () => {
    return (
        <div>
           <Header styles="scrolled"/>
            <AnalysisContent />

        </div>

    );
};

export default Analysis;