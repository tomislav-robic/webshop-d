import React from 'react'
import Header from "./components/header/Header.jsx"
import "./components/header/Header.css"
import './App.css';
import RecommendedCategory from "./components/recommended-category/RecommendedCategory.jsx";
import Login from "./components/login/Login.jsx";
import Hats from "./components/hats/Hats.jsx";
import Jackets from "./components/jackets/Jackets.jsx";
import Sneakers from "./components/sneakers/Sneakers.jsx";
import Womens from "./components/womens/Womens.jsx";
import Mens from "./components/mens/Mens.jsx";
import AlgebraShop from "./components/algebra-shop/AlgebraShop.jsx";
import ShoppingBag from "./components/shopping-bag/ShoppingBag.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Component } from "react";
import {auth} from "./firebase-config"

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
              <Route path="/Hats" element={<Hats />}/>
              <Route path="/Jackets" element={<Jackets />}/>
              <Route path="/Sneakers" element={<Sneakers />}/>
              <Route path="/Womens" element={<Womens />}/>
              <Route path="/Mens" element={<Mens />}/>
              <Route path="/AlgebraShop" element={<AlgebraShop />}/>
              <Route path="/ShoppingBag" element={<ShoppingBag />}/>
            </Routes>
          </div>  
        </div>
      </Router>
    );    
  }

}

export default App;
