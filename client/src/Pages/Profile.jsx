import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import avatar1 from "../images/avataaars-1.png"
import Navbar from '../Navbar.js'

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

                <div class="ProfileWrapper">
                    <div class="ProfileColumns">
                        <div id="ProfileLeft">
                            <div id="PFuserInputBackground"  className="PFInputBackground">
                                <p id="PFuserLabel" className = "PFInputLabel">Name</p>
                                <form>
                                    <label>
                                        <input type="text" autocomplete="off" id = "PFuserInput" />
                                    </label>
                                </form>
                            </div>
                            <div id="PFuserInputBackground"  className="PFInputBackground">
                                <p id="PFuserLabel" className = "PFInputLabel">Email</p>
                                <form>
                                    <label>
                                        <input type="text" autocomplete="off" id = "PFuserInput" />
                                    </label>
                                </form>
                            </div>
                            <div id="PFuserInputBackground"  className="PFInputBackground">
                                <p id="PFuserLabel" className = "PFInputLabel">Password</p>
                                <form>
                                    <label>
                                        <input type="text" autocomplete="off" id = "PFuserInput" />
                                    </label>
                                </form>
                            </div>
                            <div id="PFuserInputBackground"  className="PFInputBackground">
                                <p id="PFuserLabel" className = "PFInputLabel">Major</p>
                                <form>
                                    <label>
                                        <input type="text" autocomplete="off" id = "PFuserInput" />
                                    </label>
                                </form>
                            </div>
                            <div class="ProfileButtonCenter">
                                <Button className="PFPageButtons" id="PF-save-button">SAVE</Button>
                            </div>
                        </div>
                        <div id="ProfileRight">
                            <img className="profile-avatar" src={avatar1} alt="profile-image"/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Profile