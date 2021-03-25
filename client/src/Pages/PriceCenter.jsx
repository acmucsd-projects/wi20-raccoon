import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

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
                
                <div id="PCtext">
                    <p>Note: This page is currently in progress, will update later</p>
                </div>
                
                <div class="PCWrapper">
                    <div id="PCnameInputBackground"  className="PCInputBackground">
                        <p id="PCnameLabel" className = "PCInputLabel">Name of the place</p>
                        <form>
                            <label>
                                <input type="text" autocomplete="off" id = "PCnameInput" />
                            </label>
                        </form>
                    </div>
                    <div id="PCdescInputBackground"  className="PCInputBackground">
                        <p id="PCdescLabel" className = "PCInputLabel">Description of the place</p>
                        <form>
                            <label>
                                <input type="text" autocomplete="off" id = "PCdescInput" />
                            </label>
                        </form>
                    </div>
                    <div id="PCwhyInputBackground"  className="PCInputBackground">
                        <p id="PCwhyLabel" className = "PCInputLabel">(Optional) Why would you like to request this place?</p>
                        <form>
                            <label>
                                <input type="text" autocomplete="off" id = "PCwhyInput" />
                            </label>
                        </form>
                    </div>
                </div>

                <div id="PCcancelBtnBackground"  className="PCBtnBackground">
                    <div id="cancelButton">
                        <Button className="PCPageButtons">CANCEL</Button>
                    </div>
                    <div id="submitButton">
                        <Button className="PCPageButtons">SUBMIT</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PriceCenter