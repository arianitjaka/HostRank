import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavItem.scss";
import { Megamenu } from './Megamenus/Megamenu/Megamenu';

const NavItem = (props) => {
  return (
    <li className={`nav-item nav-item_${props.megamenu.name}`}>
      <NavLink className="nav-link" exact to={props.to}>{props.children}</NavLink>
      <Megamenu styles={props.megamenu.name} megamenu={props.megamenu.container} megamenuHeader={props.megamenu.header}/>
    </li>
  )
}

export default NavItem;
