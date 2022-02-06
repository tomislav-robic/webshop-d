import React from 'react'
import Header from "./Header.jsx"
import "./Header.css"
import './App.css';
import RecommendedCategory from "./RecommendedCategory.jsx";
import Login from "./Login.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Component } from "react";
import {auth} from "./firebase-config"
import { useNavigate } from "react-router-dom";

export class App extends Component {

  unsubscribeFromAuth = null; 

  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  } 

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => { 
      const localUser = user;
      this.setState({currentUser: localUser}, console.log(user));
      if (user) {localStorage.setItem("user", localUser);};
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header docs={this.state.currentUser}/>
          <div className="content">
            <Routes>
              <Route path="/" element={<RecommendedCategory />}/>
              <Route path="/Login" element={<Login />}/>
            </Routes>
          </div>  
        </div>
      </Router>
    );    
  }

}

export default App;
