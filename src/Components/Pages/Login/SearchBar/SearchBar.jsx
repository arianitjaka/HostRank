import React from 'react';
import './SearchBar.scss';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';


const SearchBar = () => {
    return (
        <div className="nav-searchbar">
            <div className="search-bar-input">
                <SearchIcon />
                <input type="text"  placeholder="Analyze your Website or App online"/>
            </div>

            <button className="search-bar-button">
                <Link><h1>Search</h1></Link>
            </button>

        </div>
    );
};

export default SearchBar;