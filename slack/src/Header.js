import React from 'react' ;
import './Header.css';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
            <Avatar className = "header_avatar" alt="Username" />
            <AccessTimeIcon />
            </div>
            <div className="header_search">
                <SearchIcon />
                <input placeholder="Type here.." />
            </div>
            <div className="header_right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header;
