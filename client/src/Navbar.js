import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import {SidebarData} from './SidebarData'
import './Navbar.css'
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import avatar1 from "./images/avataaars-1.png"

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div className = 'navbar-all'>
        <div className = "navbar">
            <Link to="#" className = "menu-bars">
                <FaIcons.FaBars color = "white" onClick={showSidebar}/>
            </Link>
        </div>
        <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className = 'nav-menu-items' onClick={showSidebar}>
                <li className = 'navbar-toggle'>
                    <Link to = "#" className = 'menu-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key = {index} className= {item.cName}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        <div className = "searchbar">
                <input placeholder = "Search" type = "text"></input>
                <SearchIcon style={{ color: 'white'}}/>
            </div>
            <div className = "profile">
                <img className="profile-avatar" src={avatar1} alt="profile-image"/>
            </div>
        </div>
    )
}

export default Navbar
