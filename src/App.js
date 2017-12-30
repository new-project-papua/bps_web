import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="container">
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
