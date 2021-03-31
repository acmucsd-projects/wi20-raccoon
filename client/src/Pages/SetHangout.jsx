import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import pcimage from "../images/price-center.jpg"
import avatar1 from "../images/avataaars-1.png"
import avatar2 from "../images/avataaars-2.png"
import avatar3 from "../images/avataaars-3.png"
import avatar4 from "../images/anonymous-pic.png"
import {IoMdArrowDropdown} from 'react-icons/io'

import "./SetHangout.css";

class SetHangout extends Component{
  
    render(){
        return(
            <div id="PCpageBackground">
                <div id="PCheaderBackground">
                    <p id="PCtitle">
                        Set a Hangout - Price Center
                    </p>
                </div>
                
                <div class="SetHangout-Wrapper">
                    <div id="SetHangout-left">
                        <div id="RNnameInputBackground"  className="RNInputBackground">
                            <p id="RNnameLabel" className = "RNInputLabel">Search for Users</p>
                            <form>
                                <label>
                                    <input type="text" autocomplete="off" id = "RNnameInput" />
                                </label>
                            </form>
                        </div>
                        <div id="RNnameInputBackground"  className="RNInputBackground">
                            <p id="RNnameLabel" className = "RNInputLabel">Date and Time</p>
                            <form>
                                <label>
                                    <input type="text" autocomplete="off" id = "RNnameInput" />
                                </label>
                            </form>
                        </div>
                        <div id="RNnameInputBackground"  className="RNInputBackground">
                            <p id="RNnameLabel" className = "RNInputLabel">(Optional) Description / Message</p>
                            <form>
                                <label>
                                    <input type="text" autocomplete="off" id = "RNnameInput" />
                                </label>
                            </form>
                        </div>
                        <div class="SetHangout-left-buttons">
                            <div>
                                <Link to="/price-center">
                                    <Button className="PCPageButtons">CANCEL</Button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/home">
                                    <Button className="PCPageButtons">SEND</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id="SetHangout-right">
                        <div id="SetHangout-introtext">
                            <p>Price Center offers a variety of services, places, and spaces geared to the needs of students including restaurants, the campus bookstore, a movie theater, and offices for student organizations.</p>
                        </div>
                        <img className="SetHangout-image" src={pcimage} alt="sethangout-image"/>
                        <p id="PC-location-text"><b>Location:</b> UC San Diego <IoMdArrowDropdown className = "pc-drop-icon"/></p>
                        <div class="PC-rating-box">
                            <p><b>Overall Rating:</b> 4.5/5</p>
                            <p><b>Safety Rating:</b> 9/10</p>
                            <p><b>How many people are there at the moment:</b> 50 &rarr; 75</p>
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default SetHangout