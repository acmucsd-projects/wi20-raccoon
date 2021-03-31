import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import "./HomePage.css";
import Header from "./Header.js"

class HomePage extends Component{
    render(){
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

export default HomePage