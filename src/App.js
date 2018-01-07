import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/Home'

import store from './store/store'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div>
            <NavBar />
            <div className="container">
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
