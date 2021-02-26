import React from 'react';
import ReactDom from 'react-dom';
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  export default function App() {
    return (
      <Router>
          <Switch>
            <Route path="/register">
              <RegistrationPage />
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
      </Router>
    );
  }