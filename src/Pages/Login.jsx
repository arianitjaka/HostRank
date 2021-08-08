import React , {useEffect} from 'react';
import AOS from 'aos';
import Header1 from '../Components/Shared/Header/Header';
import Header from '../Components/Pages/Login/Header/Header';
import UserRating from '../Components/Pages/Login/UserRating/UserRating';
import DigitalPlatforms from '../Components/Pages/Login/DigitalPlatforms/DigitalPlatforms';


const Login = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          disable: 'mobile',
          once: true,
        });
      }, []);
    return (
        <div>
            <Header1  styles="scrolled"/>
            <Header />
            <UserRating />
            <DigitalPlatforms />
        </div>
    );
}

export default Login;