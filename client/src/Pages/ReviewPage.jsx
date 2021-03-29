import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";


import "./ReviewPage.css";

class ReviewPage extends Component{
  
    
    render(){

        const ratingChanged = (newRating) => {
            console.log(newRating);
          };

        return(
            <div id="REpageBackground">
                <div id="REheaderBackground">
                    <p id="REtitle">
                        Review - Price Center
                    </p>
                </div>
                <div id="REreviewBackground">
                    <div id="REoverallBackground">
                        <p id="REoverall">Overall Rating</p>
                    </div>
                    <div id="REstarsBackground">
                        <ReactStars id = "REstars"
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
                <div id="REsafetyBackground">
                    <p id= "REsafetytxt">Safety Rating</p>
                    {/*
                    Add slider code here
                    */}
                </div>
                <div id="REnumPeopleBackground" class = "REInputBackground">
                    <p id="REnumLabel" className = "REInputLabel">How many people were there?</p>
                    <form>
                        <label>
                            <input type="text" autocomplete="off" id = "REnumInput" />
                        </label>
                    </form>
                </div>
                    
                           
                <div id="REcommentBackground" class = "REInputBackground">
                    <p id="REcommentLabel" className = "REInputLabel">Comment</p>
                    <form>
                        <label>
                            <input type="text" autocomplete="off" id = "REcommentInput" />
                        </label>
                    </form>
                </div>

                <div id="REanonymousOption">
                    <input
                        type="checkbox"
                        id = "REcheckbox"
                    />
                    <p id="RErevAsAnon">Review as Anonymous</p>
                </div>
                
                <div id="REcancelBtnBackground"  className="REBtnBackground">
                    <div id="cancelButton">
                        <Button className="REPageButtons">CANCEL</Button>
                    </div>
                    <div id="submitButton">
                        <Button className="REPageButtons">SUBMIT</Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default ReviewPage