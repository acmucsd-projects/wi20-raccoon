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
            <div id="pageBackground">
                <div id="titleBackground">
                    <h1 id="title">
                        Join Us
                    </h1>
                </div>
                <div id="userInputBackground"  className="InputBackground">
                    <p id="userLabel" className = "InputLabel">Name</p>
                    <form>
                        <label>
                            <input type="text" autocomplete="off" id = "userInput" />
                        </label>
                    </form>
                </div>
                <div id="emailInputBackground"  className="InputBackground">
                    <p id="emailLabel" className = "InputLabel">Email</p>
                    <form>
                        <label>
                            <input type="text" autocomplete="off" id = "emailInput" />
                        </label>
                    </form>
                </div>
                <div id="passwordInputBackground" className="InputBackground" >
                    <p id="passLabel" className = "InputLabel">Password</p>
                    <form>
                        <label>
                            <input type="text" autocomplete="off" id = "passwordInput"/>
                        </label>
                    </form>
                </div>
                <div id = "haveAccountBackground">
                    <p id="haveAccountLabel" className = "HaveAccountLabel">Already have an account? <Link id="signInLink" to="/"><b id="signIn">Sign In</b></Link></p>
                </div>
                <div id="createAccountBtnBackground"  className="BtnBackground">
                    <Button className="RegisterPageButtons" onClick={this.createAccount}>Create Account</Button>
                </div>
            </div>
        )
    }
}

export default RegistrationPage