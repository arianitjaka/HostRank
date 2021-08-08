import React from 'react';
import './SharedTable.scss';

import ArrowDU from '../../../../Assets/Home/Header/arrow-ud.svg';

import RankPic from '../../../../Assets/Home/Header/rank-logo.svg';

import GoogleIcon from '../../../../Assets/Home/Header/logos/google.png';
import YoutubeIcon from '../../../../Assets/Home/Header/logos/youtube.png';
import FacebookIcon from '../../../../Assets/Home/Header/logos/facebook.png';
import TwitterIcon from '../../../../Assets/Home/Header/logos/twitter.png';
import InstagramIcon from '../../../../Assets/Home/Header/logos/instagram.png';
import BaiduIcon from '../../../../Assets/Home/Header/logos/baidu.png';
import WikipediaIcon from '../../../../Assets/Home/Header/logos/wikipedia.png';
import YandexIcon from '../../../../Assets/Home/Header/logos/yandex.png';
import YahooIcon from '../../../../Assets/Home/Header/logos/yahoo.png';
import AmazonIcon from '../../../../Assets/Home/Header/logos/amazon.png';



const SharedTable = () => {
    return (
        <div>

            <div className="table-content">
                <table>

                    <tr>
                        <th>
                            <div className="table-rank">
                                <img src={RankPic} alt="" className="rank-logo" />
                                <h1>Rank</h1>
                                <img src={ArrowDU} alt="" />
                            </div>

                        </th>
                        <th>
                            <div className="table-rank">
                                <h1>Website</h1>
                                <img src={ArrowDU} alt="" />
                            </div>
                        </th>
                        <th>
                            <div className="table-rank">
                                <h1>Avg. Visit Duration</h1>
                                <img src={ArrowDU} alt="" />
                            </div>

                        </th>
                        <th>
                            <div className="table-rank">
                                <h1>Pages / Visit</h1>
                                <img src={ArrowDU} alt="" />
                            </div>
                        </th>
                        <th>
                            <div className="table-rank">
                                <h1>Bounce Rate</h1>
                                <img src={ArrowDU} alt="" />
                            </div>
                        </th>
                    </tr>


                    <tr>
                        <td className="left-side-col">01.</td>
                        <td>
                            <div className="website-row">
                                <img src={GoogleIcon} alt="" />
                                <h1>google.com</h1>
                            </div>
                        </td>
                        <td>
                            00:11:58
                        </td>

                        <td>
                            8.91
                        </td>
                        <td className="right-side-col">27.56%</td>
                    </tr>

                    <tr>
                        <td className="left-side-col">02.</td>
                        <td>
                            <div className="website-row">
                                <img src={YoutubeIcon} alt="" />
                                <h1>youtube.com</h1>
                            </div>
                        </td>
                        <td>00:21:53</td>
                        <td>11:36</td>
                        <td className="right-side-col">21.34%</td>
                    </tr>

                    <tr>
                        <td className="left-side-col">03.</td>
                        <td>
                            <div className="website-row">
                                <img src={FacebookIcon} alt="" />
                                <h1>facebook.com</h1>
                            </div>
                        </td>
                        <td>00:10:13</td>
                        <td>8:47</td>
                        <td className="right-side-col">32.85%</td>
                    </tr>

                    <tr>
                        <td className="left-side-col">04.</td>
                        <td>
                            <div className="website-row">
                                <img src={TwitterIcon} alt="" />
                                <h1>twitter.com</h1>
                            </div>
                        </td>
                        <td>00:10:48</td>
                        <td>11.73</td>
                        <td className="right-side-col">30.01%</td>
                    </tr>

                    <tr>
                        <td className="left-side-col">05.</td>
                        <td>
                            <div className="website-row">
                                <img src={InstagramIcon} alt="" />
                                <h1>instagram.com</h1>
                            </div>
                        </td>
                        <td>00:07:34</td>
                        <td>11.03</td>
                        <td className="right-side-col">35.98%</td>
                    </tr>

                    <tr>
                        <td className="left-side-col">06.</td>
                        <td>
                            <div className="website-row">
                                <img src={BaiduIcon} alt="" />
                                <h1>baidu.com</h1>
                            </div>
                        </td>
                        <td>00:06:26</td>
                        <td>8.29</td>
                        <td className="right-side-col">20.39%</td>
                    </tr>

                    <tr>
                        <td className="left-side-col">07.</td>
                        <td>
                            <div className="website-row">
                                <img src={WikipediaIcon} alt="" />
                                <h1>wikipedia.org</h1>
                            </div>
                        </td>
                        <td>00:09:49</td>
                        <td>8.96</td>
                        <td className="right-side-col">20.79%</td>
                    </tr>

                    <tr>
                        <td className="left-side-col">08.</td>
                        <td>
                            <div className="website-row">
                                <img src={YandexIcon} alt="" />
                                <h1>yandex.com</h1>
                            </div>
                        </td>
                        <td>00:03:55</td>
                        <td>3.00</td>
                        <td className="right-side-col">57.74%</td>
                    </tr>

                    <tr>
                        <td className="left-side-col">09.</td>
                        <td>
                            <div className="website-row">
                                <img src={YahooIcon} alt="" />
                                <h1>yahoo.com</h1>
                            </div>
                        </td>
                        <td>00:08:23</td>
                        <td>11.15</td>
                        <td className="right-side-col">13.48%</td>
                    </tr>

                    <tr>
                        <td className="left-side-col">10.</td>
                        <td>
                            <div className="website-row">
                                <img src={AmazonIcon} alt="" />
                                <h1>amazon.com</h1>
                            </div>
                        </td>
                        <td>00:11:57</td>
                        <td>9.46</td>
                        <td className="right-side-col">25.28%</td>
                    </tr>

                </table>
            </div>

        </div>
    );
};

export default SharedTable;