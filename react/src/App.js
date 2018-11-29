import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Login from './components/Login';
import NavBar from './components/NavBar';
import './App.css';
class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={Login}/>
        <Route path="/home" component={NavBar}/>
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
