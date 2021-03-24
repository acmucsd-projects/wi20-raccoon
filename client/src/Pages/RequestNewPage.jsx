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
                
                <div id="RNnameInputBackground"  className="RNInputBackground">
                    <p id="RNnameLabel" className = "RNInputLabel">Name of the place</p>
                    <form>
                        <label>
                            <input type="text" autocomplete="off" id = "RNnameInput" />
                        </label>
                    </form>
                </div>

                <div id="RNdescInputBackground"  className="RNInputBackground">
                    <p id="RNdescLabel" className = "RNInputLabel">Description of Place</p>
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

                <div id="RNcancelBtnBackground"  className="RNBtnBackground">
                    <Button className="RNPageButtons">CANCEL</Button> <Button className="RNPageButtons">SUBMIT</Button>
                </div>
            </div>
        )
    }
}

export default RequestNewPage