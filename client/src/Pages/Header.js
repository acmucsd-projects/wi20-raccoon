import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";

function Header() {
    return (
        <div className = "navbar">
            <div className = "manu-logo">
            </div>
            <div className = "searchbar">
                <input placeholder = "Search" type = "text"></input>
                <SearchIcon style={{ color: 'white'}}/>
            </div>
            <div className = "profile">
                <Avatar />
            </div>
        </div>
    );
}

export default Header;
