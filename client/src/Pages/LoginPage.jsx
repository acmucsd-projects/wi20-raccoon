import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

import "./LoginPage.css";


class LoginPage extends Component{
    signIn() {
        alert("Sign in clicked");
    }

    render(){

        return(
            <div id="LPpageBackground">
                <div id="LPtitleBackground">
                    <h1 id="LPheader">
                        ACM Hangout
                    </h1>
                </div>
                <div id="LPuserInputBackground"  className="LPInputBackground">
                    <p id="LPemailLabel" className = "LPInputLabel">Email</p>
                    <form>
                        <label>
                            <input type="text" autocomplete="off" id = "LPuserInput" />
                        </label>
                    </form>
                </div>
                <div id="LPpasswordInputBackground" className="LPInputBackground" >
                    <p id="LPpassLabel" className = "LPInputLabel">Password</p>
                    <form>
                        <label>
                            <input type="text" autocomplete="off" id = "LPpasswordInput"/>
                        </label>
                    </form>
                </div>
                <div id = "LPforgotPassBackground">
                    <p id="LPforgotPassLabel" className = "LPForgotPassLabel">Forgot Password?</p>
                </div>
                <div id="LPsignInBtnBackground"  className="LPBtnBackground">
                    <Button className="LPHomePageButtons" onClick={this.signIn}>Sign In</Button>
                </div>
                <div id="LPnewAccountBtnBackground"  className="LPBtnBackground">
                    <Link to="/register">
                        <Button className="LPHomePageButtons">Create New Account</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default LoginPage