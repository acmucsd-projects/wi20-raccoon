import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import pcimage from "../images/price-center.jpg"
import avatar1 from "../images/avataaars-1.png"
import avatar2 from "../images/avataaars-2.png"
import avatar3 from "../images/avataaars-3.png"
import avatar4 from "../images/anonymous-pic.png"

import "./PriceCenter.css";

class PriceCenter extends Component{
  
    render(){
        return(
            <div id="PCpageBackground">
                <div id="PCheaderBackground">
                    <p id="PCtitle">
                        Price Center
                    </p>
                </div>
                
                <div class="PCWrapper">
                    <div>
                        <div id="PC-left">
                            <div id="PC-left-top">
                                <div id="PCintrotext">
                                    <p>A great place for students to eat, hang out, and even study</p>
                                </div>
                                <div>
                                    <Button className="PCPageButtons" id="PC-review-button">+ REVIEW</Button>
                                </div>
                            </div>
                            <div class="comment-section">
                                <img className="comment-avatar" src={avatar1} alt="PC-image"/>
                                <div>
                                    <p>Jane Doe - <b>4 &#9733;</b> - 2 days ago</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <b>See More</b></p>
                                </div>
                            </div>
                            <div class="comment-section">
                                <img className="comment-avatar" src={avatar2} alt="PC-image"/>
                                <div>
                                    <p>John Doe - <b>4 &#9733;</b> - 3 days ago</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <b>See More</b></p>
                                </div>
                            </div>
                            <div class="comment-section">
                                <img className="comment-avatar" src={avatar3} alt="PC-image"/>
                                <div>
                                    <p>Jake Doe - <b>4 &#9733;</b> - 5 days ago</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <b>See More</b></p>
                                </div>
                            </div>
                            <div class="comment-section">
                                <img className="comment-avatar" src={avatar4} alt="PC-image"/>
                                <div>
                                    <p>Anonymous Doe - <b>4 &#9733;</b> - 5 days ago</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <b>See More</b></p>
                                </div>
                            </div>
                        </div>
                        <Button className="PCPageButtons">SEE MORE</Button>
                    </div>
                    <div id="PC-right">
                        <div class="right-buttons">
                            <div>
                                <Button className="PCPageButtons">+ HANGOUT</Button>
                            </div>
                            <div>
                                <Button className="PCPageButtons">SHARE</Button>
                            </div>
                        </div>
                        <img className="PC-image" src={pcimage} alt="PC-image"/>
                        <p id="PC-location-text"><b>Location:</b> UC San Diego</p>
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

export default PriceCenter