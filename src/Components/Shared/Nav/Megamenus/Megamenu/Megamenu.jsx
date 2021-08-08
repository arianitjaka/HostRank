import React from 'react';
import "./Megamenu.scss";
import { Link } from "react-router-dom";

export const Megamenu = (props) => {
  return (
    <div className={`megaMenu ${props.styles}`}>
      <div className="triangle"></div>
      <div className="megaMenu_container">
        <p className="megaMenu_container-header">{props.megamenuHeader}</p>
        <div className="megaMenu_container-grid">
          {props.megamenu.map((menuItem, i) => {
            return (
              <Link to={menuItem.to} className="megaMenuItem" key={i}>
                <div className="megaMenuItem-Svg">
                  <img src={menuItem.svg}/>
                </div>
                <div className="megaMenuItem-Text">
                  <h3>{menuItem.header}</h3>
                  <p>{menuItem.caption}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}
