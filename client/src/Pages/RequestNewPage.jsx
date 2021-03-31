import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

import "./RequestNewPage.css";

class RequestNewPage extends Component{
  
    render(){
        return(
            <div id="RNpageBackground">
                <div id="RNheaderBackground">
                    <p id="RNtitle">
                        Request New Place
                    </p>
                </div>
                
                <div id="RNtext">
                    <p>The place you would like to see is not here yet? 
                        Please send request for new place to us below.</p>
                </div>
                
                <div class="RNWrapper">
                    <div id="RNnameInputBackground"  className="RNInputBackground">
                        <p id="RNnameLabel" className = "RNInputLabel">Name of the place</p>
                        <form>
                            <label>
                                <input type="text" autocomplete="off" id = "RNnameInput" />
                            </label>
                        </form>
                    </div>
                    <div id="RNnameInputBackground"  className="RNInputBackground">
                        <p id="RNnameLabel" className = "RNInputLabel">Address</p>
                        <form>
                            <label>
                                <input type="text" autocomplete="off" id = "RNnameInput" />
                            </label>
                        </form>
                    </div>
                    <div id="RNdescInputBackground"  className="RNInputBackground">
                        <p id="RNdescLabel" className = "RNInputLabel">Description of the place</p>
                        <form>
                            <label>
                                <input type="text" autocomplete="off" id = "RNdescInput" />
                            </label>
                        </form>
                    </div>
                    <div id="RNwhyInputBackground"  className="RNInputBackground">
                        <p id="RNwhyLabel" className = "RNInputLabel">(Optional) Why would you like to request this place?</p>
                        <form>
                            <label>
                                <input type="text" autocomplete="off" id = "RNwhyInput" />
                            </label>
                        </form>
                    </div>
                </div>

                <div id="RNcancelBtnBackground"  className="RNBtnBackground">
                    <div id="cancelButton">
                        <Link to="/home">
                            <Button className="RNPageButtons">CANCEL</Button>
                        </Link>
                    </div>
                    <div id="submitButton">
                        <Link to="/home">
                            <Button className="RNPageButtons">SUBMIT</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default RequestNewPage