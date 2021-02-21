import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import "./LoginPage.css";


class LoginPage extends Component{
    signIn() {
        alert("Sign in clicked");
    }
    createNewAccount() {
        alert("Create New Account clicked");
    }
    render(){
      
        return(
            <div id="pageBackground">
                <div id="titleBackground">
                    <h1 id="title">
                        ACM Hangout
                    </h1>
                </div>
                <div id="userInputBackground"  className="InputBackground">
                    <p id="emailLabel" className = "InputLabel">Email</p>
                    <form>
                        <label>
                            <input type="text" autocomplete="off" id = "userInput" />
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
                <div id = "forgotPassBackground">
                    <p id="forgotPassLabel" className = "ForgotPassLabel">Forgot Password?</p>
                </div>
                <div id="signInBtnBackground"  className="BtnBackground">
                    <Button className="HomePageButtons" onClick={this.signIn}>Sign In</Button>
                </div>
                <div id="newAccountBtnBackground"  className="BtnBackground">
                    <Button className="HomePageButtons" onClick={this.createNewAccount}>Create New Account</Button>
                </div>
            </div>
        )
    }
}

export default LoginPage