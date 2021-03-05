import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

import "./RegistrationPage.css";


class RegistrationPage extends Component{
    createAccount() {
        alert("Create New Account clicked");
    }
    render(){
      
        return(
            <div id="RPpageBackground">
                <div id="RPtitleBackground">
                    <h1 id="RPtitle">
                        Join Us
                    </h1>
                </div>
                <div id="RPuserInputBackground"  className="RPInputBackground">
                    <p id="RPuserLabel" className = "RPInputLabel">Name</p>
                    <form>
                        <label>
                            <input type="text" autocomplete="off" id = "RPuserInput" />
                        </label>
                    </form>
                </div>
                <div id="RPemailInputBackground"  className="RPInputBackground">
                    <p id="RPemailLabel" className = "RPInputLabel">Email</p>
                    <form>
                        <label>
                            <input type="text" autocomplete="off" id = "RPemailInput" />
                        </label>
                    </form>
                </div>
                <div id="RPpasswordInputBackground" className="RPInputBackground" >
                    <p id="RPpassLabel" className = "RPInputLabel">Password</p>
                    <form>
                        <label>
                            <input type="text" autocomplete="off" id = "RPpasswordInput"/>
                        </label>
                    </form>
                </div>
                <div id = "RPhaveAccountBackground">
                    <p id="RPhaveAccountLabel" className = "RPHaveAccountLabel">Already have an account? <Link id="RPsignInLink" to="/"><b id="RPsignIn">Sign In</b></Link></p>
                </div>
                <div id="RPcreateAccountBtnBackground"  className="RPBtnBackground">
                    <Button className="RPRegisterPageButtons" onClick={this.createAccount}>Register</Button>
                </div>
            </div>
        )
    }
}

export default RegistrationPage