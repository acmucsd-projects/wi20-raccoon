import React from 'react';
import ReactDom from 'react-dom';
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import RequestNewPage from './Pages/RequestNewPage';
import PriceCenter from './Pages/PriceCenter';
import Places from './Places.js'
import NavBar from './Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ReviewPage from './Pages/ReviewPage';

  export default function App() {
    return (
      <div>
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
            {/* <Route path = '/'>
              <NavBar/>
            </Route> */}
            <Route path = '/home'>
              <Places />
            </Route>
            <Route path = '/review'>
              <ReviewPage />
            </Route>
          </Switch>
      </Router>
      </div>
    );
  }
