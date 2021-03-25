import React from 'react'
import './App.css';
import Header from './Pages/Header'
import Places from './Places.js'
import NavBar from './Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        {/* Header */}
        <Router>
          <NavBar/>
          <Switch>
            <Route path = '/'/>
          </Switch>
        </Router>
        {/* Main Content */}
        <Places />
    </div>
  );
}

export default App;
