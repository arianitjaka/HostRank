import React from 'react';
import './Analysis.scss';
import AnalysisHeader from './Header/AnalysisHeader';
import AnalysisTabs from './AnalysisTabs/AnalysisTabs';




const AnalysisContent = () => {
    return (
        <div className="analysis-container">
            <AnalysisHeader />
            <AnalysisTabs />

        </div>

    );
};

export default AnalysisContent;