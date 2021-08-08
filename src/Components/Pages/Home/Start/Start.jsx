import React from 'react';
import './Start.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {AiOutlineBorderlessTable, AiOutlineGoogle} from 'react-icons/ai';
import dashboard from '../../../../Assets/Cards/dashboard1.webp';
import chrome from '../../../../Assets/Cards/chrome.webp';
import Panel1 from './Panel1';
import Panel2 from './Panel2';
const Start=()=>{
    return(
        <div className="start-host">
           <div className="title">
           Get Started with Hostrank
           </div>
            <div className="start-tabs">
                <Tabs>
                    <TabList>
                        <Tab>
                            <AiOutlineBorderlessTable className="tab-icon"/>
                        Dashboard
                        </Tab>
                        <Tab>
                            <AiOutlineGoogle className="tab-icon" />
                        Google Extension
                        </Tab>
                    </TabList>
                    <TabPanel>
                     <Panel1 />
                    </TabPanel>
                    <TabPanel>
                     <Panel2 />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
};
export default Start ;