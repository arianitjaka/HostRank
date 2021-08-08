import React, { useState, useEffect } from "react";
import "./Header.scss";
import { throttle } from "lodash";
import {BiSearch} from 'react-icons/bi';
import { AiOutlineUser,AiOutlineLock ,AiOutlineMail} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/LogoName";
import Navbar from '../Nav/Navbar';
import Styledlink from "../StyledLink/StyledLink";
import BurgerMenu from '../MobileMenu/index';
const Header = (props) => {
  const [active,setActive] = useState(false);

  let classes = [];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY >= 20) setScrolled(true);
      else setScrolled(false);
    }, 100);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (scrolled) classes.push("scrolled");
  else classes.push(props.styles);
 function hideNav(){
   setActive(!active);
 }
 function wrapHide(){
   setActive(false);
 }
  return (
    <header className={`header ${classes.join(" ")} ${scrolled}`}>
      <div className="header_container">
       <Logo scrolled={scrolled || props.styles === "scrolled"}/>
       <Navbar />
       <BurgerMenu /> 
       <div className="auth-links">
       <div className="auth-links_login">
       <div className="dropdown-auth">
       <Link to="/login">
        <Styledlink btn="Log In" styles="outline" />
        <div className="dropdown-content--l">
               <h3>Login to HostRank</h3>
               <div className="input-group">
                 <AiOutlineUser className="icon"/>
                 <input type="email" placeholder="Your username or email" />
               </div>
               <div className="input-group">
                 <AiOutlineLock className="icon"/>
                 <input type="password" placeholder="Your password" />
               </div>
               <Link to="" className="forgot" >
                 Forgot Password ?
               </Link>
               <button type="Submit">Log In</button>
               </div>
       </Link>
       </div>
       </div>
       <div className="auth-links_signup">
        <div className="dropdown-auth">
       <Link to="signup">

        <Styledlink btn="Sign Up"  />
        <div className="dropdown-content--l signupdropdown">
               <h3>Signup to HostRank</h3>
               <div className="input-group">
                 <AiOutlineUser className="icon"/>
                 <input type="email" placeholder="Your username" />
               </div>
               <div className="input-group">
                 <AiOutlineMail className="icon"/>
                 <input type="email" placeholder="Your email address" />
               </div>
               <div className="input-group">
                 <AiOutlineLock className="icon"/>
                 <input type="password" placeholder="Your password" />
               </div>
               <div className="input-group">
                 <AiOutlineLock className="icon"/>
                 <input type="password" placeholder="Confirm password" />
               </div>
               <p><input type="checkbox" /> I agree to the <span>Leasename Terms of Conditions </span>
    & <span> Privacy Policy. </span> </p>
               <button type="Submit">Sign Up</button>
               </div>
       </Link>
       </div>
       </div>
        </div>
        </div>
    </header>
  )
}

export default Header
