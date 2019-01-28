import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
       <Route exact path="/"  component={Login}/>
       <Route path="/home" component={Home}/>
       /** 
        External social media link
       */
       <Route path='/social/facebook' component={() => { window.location = 'https://www.facebook.com/fc.erin'; return null;} }/>
       <Route path='/social/twitter' component={() => { window.location = 'https://twitter.com/erintran1910'; return null;} }/>
       <Route path='/social/medium' component={() => { window.location = 'https://medium.com/@hoangtran_93151'; return null;} }/>
       <Route path='/social/linkedin' component={() => { window.location = 'https://www.linkedin.com/in/hoang-tran-6b25a115a/'; return null;} }/>
       <Route path='/social/github' component={() => { window.location = 'https://github.com/hoang19101997'; return null;} }/>

      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
