
import React from 'react';
import { Link } from 'react-router-dom';
import './StyledLink.scss';

const Styledlink = (props) => {
    return (
        <div className={`styled-button`}>
        <button className={`pulse ${props.styles}`}>
      {props.btn}
       </button>
        </div>
    )
}

export default Styledlink;