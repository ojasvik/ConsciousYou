import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import { Home } from './containers/Home/index';
import { SignIn } from './containers/Signin/index';
import { SignUp } from './containers/Signup/index';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
