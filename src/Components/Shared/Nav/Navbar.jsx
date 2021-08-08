import React,{useState} from 'react';
import "./Navbar.scss";
import { menu } from "./Menu";
import { IconContext } from "react-icons";
import NavItem from "./NavItem";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import {Link, NavLink} from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import SearchBar from '../SearchBar/SearchBar';
const Navbar = (props) => {
  function openBar(){
    setBar(!bar)
  }
  const [bar,setBar] = useState(false);
  return (
    <nav className="navbar" >
      <ul className={`nav-items ${props.mobile}`}>
        {menu.map((m, i) => {
          return (
            <NavItem key={i} to={m.to} megamenu={m.megamenu}>
              {m.name}
              <IconContext.Provider value={props.scrolled ? { color: "#2a2a2a", size: "20px" } : { color: "white  ", size: "20px" }}>
                <div className="navBar-icon">
                  <FiChevronDown className="menuicon" />
                </div>
              </IconContext.Provider>
            </NavItem>
          )
        })}
      </ul>
      <div className="nomegamenu">

   <NavLink to="/solutions" >
    Solutions
   </NavLink>
   <NavLink to="/resources" >
    Resources
   </NavLink>
   <NavLink to="/tools" >
    Tools
   </NavLink>
    <div className="explore" onClick={openBar}>

      <FiSearch  className="searchicon" />   Explore
    </div>
       {bar===true && <SearchBar />}
      </div>
    </nav>
  )
}

export default Navbar
