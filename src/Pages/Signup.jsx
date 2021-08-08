import React , {useEffect} from 'react';
import AOS from 'aos';
import Header1 from '../Components/Shared/Header/Header';
import Header from '../Components/Pages/Signup/Header/Header';
import UserRating from '../Components/Pages/Signup/UserRating/UserRating';
import DigitalPlatforms from '../Components/Pages/Signup/DigitalPlatforms/DigitalPlatforms';


const Signup = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          disable: 'mobile',
          once: true,
        });
      }, []);
    return (
        <div>
            <Header1 styles="scrolled" />
            <Header />
            <UserRating />
            <DigitalPlatforms />
        </div>
    );
}

export default Signup;