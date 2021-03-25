import React from 'react';
import ReactDom from 'react-dom';
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import RequestNewPage from './Pages/RequestNewPage';
import PriceCenter from './Pages/PriceCenter';
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
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/request">
              <RequestNewPage />
            </Route>
            <Route path="/price-center">
              <PriceCenter />
            </Route>
          </Switch>
      </Router>
    );
  }