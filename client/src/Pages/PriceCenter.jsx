import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import { pcimage } from "../images/price-center.jpg"

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
                        </div>
                        <h1>Need to put comments somewhere here later</h1>
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
                        <h2>Need to add image here later</h2>
                        {/* <img className="PC-image" src={pcimage} alt="PC-image"/> */}
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