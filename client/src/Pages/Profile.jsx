import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import pcimage from "../images/price-center.jpg"
import avatar1 from "../images/avataaars-1.png"
import avatar2 from "../images/avataaars-2.png"
import avatar3 from "../images/avataaars-3.png"
import avatar4 from "../images/anonymous-pic.png"

import "./Profile.css";

class Profile extends Component{
  
    render(){
        return(
            <div id="ProfileBackground">
                <div id="ProfileHeaderBackground">
                    <p id="ProfileTitle">
                        Profile Settings
                    </p>
                </div>
                
            </div>
        )
    }
}

export default Profile